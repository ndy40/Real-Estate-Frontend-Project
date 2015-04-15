<?php

namespace crunch;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Queue;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class UsersRetentionEmailCommand extends Command {

    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'crunch:usersretentionemail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Queue users for retention email which will be used from backend cron job.';

    /**
     * Account logic class.
     * 
     * @var PropertyLogic
     */
    protected $accountLogic;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(\models\interfaces\DataLogicInterface $repo) {
        parent::__construct();
        $this->accountLogic = $repo;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function fire() {
        $userCount = $this->authLogic->getActiveUserCount();
        $this->info("Total User: " . $userCount);
        $recordCount = 2;
        $numberOfPages = ceil($userCount / $recordCount);

        if ($userCount > 0) {
            for ($i = 1; $i <= $numberOfPages; $i++) {
                $users = $this->authLogic->getActiveUserList($i, $recordCount);
                if ($users) {
                    $this->info("Queuing users from Page {$i} of {$userCount}");
                    $this->pushToQueue($users);
                }
            }
        }

        $this->info("Users put in UsersQueue");
    }

    protected function pushToQueue($users) {
        $queueData = array();
        foreach ($users as $user) {
            $queueData[] = array(
                'id' => $user->id,
                'name' => $user->first_name.' '.$user->last_name,
                'email' => $user->email
            );
        }
        Queue::push("\models\queue\RetentionJobQueue", $queueData, "user_email_queue");
    }

    /**
     * Get the console command arguments.
     *
     * @return array
     */
    protected function getArguments() {
        return array(
        );
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions() {
        return array(
        );
    }

}
