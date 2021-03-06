<html>
    <body>
        <style>
            @import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro:400);
        </style>
        <div>
            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:rgb(25,30,29);border-bottom:1px solid rgb(220,218,216)">
                <tbody>
                    <tr>
                        <td width="620" align="center">
                            <table width="620" height="40" cellspacing="0" cellpadding="0" border="0" align="center" style="table-layout: fixed; margin: 0 auto;background-color:rgb(25,30,29)">
                                <tbody>
                                    <tr>
                                        <td width="620" align="center">
                                            <table width="620" cellspacing="0" cellpadding="0" border="0" align="center" style="border-collapse:collapse">
                                                <tbody>
                                                    <tr>
                                                        <td valign="bottom" width="620" height="30" align="center">
                                                            <div style="min-height:10px;font-size:11px;line-height:10px">&nbsp;</div>
                                                            <a target="_blank" title="Visit thenello.com" href="{{ Config::get('app.url') }}">
                                                                <img width="57" height="23" border="0" src="https://ci4.googleusercontent.com/proxy/Gxnfumwa2i6dsq63Nuz7H00y2hppdzMEzsD0wXOmWQKRf2D4Btz6xwqTwJnQ0KTUVeSUWc_gyI4c1u0NRrxAg73GDLlrCLWiMlY4qg=s0-d-e1-ft#http://pixelative.co/demo/email-assets/nello-logo2.png" alt="nello" style="text-decoration:none;display:block;outline:medium none;color:rgb(203,32,39);font-size:20px;margin:0px auto" class="CToWUd">
                                                            </a>
                                                            <div style="min-height:10px;font-size:11px;line-height:10px">&nbsp;</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </td>

                    </tr>

                </tbody>

            </table>

            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f5f3f0">

                <tbody>

                    <tr>

                        <td>

                            <table width="620" cellspacing="0" cellpadding="0" border="0" align="center" style="table-layout: fixed; margin: 0 auto;padding: 0 10px 0 10px">

                                <tbody>

                                    <tr>

                                        <td align="center">

                                            <div style="min-height:30px;font-size:30px">&nbsp;</div>

                                            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse">

                                                <tbody>

                                                    <tr>

                                                        <td align="center" style="font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;line-height:22px;color:#666666">
                                                            Hi {{$first_name}} {{$last_name}},
                                                        </td>

                                                    </tr>

                                                    <tr>

                                                        <td height="3" style="font-size:30px;line-height:30px" colspan="1">&nbsp;</td>

                                                    </tr>

                                                </tbody>

                                            </table>

                                            <table width="100%" cellspacing="0" cellpadding="0" border="0">

                                                <tbody>

                                                    <tr>

                                                        <td align="center" style="font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:20px;font-weight:400;color:#818181">

                                                            We have received a password change request for your nello account. If you made this request, then please click on the link below:

                                                        </td>

                                                    </tr>

                                                    <tr>

                                                        <td height="20" style="font-size:30px;line-height:30px" colspan="1">&nbsp;</td>

                                                    </tr>

                                                </tbody>

                                            </table>

                                            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse">

                                                <tbody>

                                                    <tr>

                                                        <td>

                                                            <table align="center" width="180" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;border-collapse:collapse">

                                                                <tbody>

                                                                    <tr>

                                                                        <td align="center" width="180" height="44" style="border-radius:4px;background-color:#F44647;">

                                                                            <a target="_blank" style="height:46px;display:block;text-decoration:none;color:#ffffff;font-size:18px;" href="{{ Config::get('app.url') }}#!/reset-password/{{ $reset_password_code }}"><img width="210" height="50" style="border:none;outline:none;display:block;text-decoration:none;" alt="Reset Password" src="http://v1.propertycrunch.co/assets/images/email-assets/reset-password.png">

                                                                            </a>

                                                                        </td>

                                                                    </tr>

                                                                </tbody>

                                                            </table>

                                                        </td>

                                                    </tr>

                                                </tbody>

                                            </table>

                                            <div style="min-height:30px;font-size:30px">&nbsp;</div>

                                            <table cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse">

                                                <tbody>

                                                    <tr>

                                                        <td>

                                                            <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="border-collapse:collapse">

                                                                <tbody>

                                                                    <tr>

                                                                        <td align="center" style="font-family:helvetica neue,helvetica,sans-serif;font-size:11px;color:#999999;line-height:18px;padding:0 50px 0 50px">
                                                                            If you did not ask to change your password, then please ignore this email.
                                                                            <br> Another user may have entered your username by mistake. 
                                                                            <br> No changes will be made to your account.

                                                                            <br> &copy; nello.
                                                                            <br>
                                                                            <a target="_blank" style="color:#979797;text-decoration:underline;font-weight:bold" href="{{ Config::get('app.url') }}#!/pages/privacy_policy">Privacy Policy</a> |
                                                                            <a target="_blank" style="color:#979797;text-decoration:underline;font-weight:bold" href="{{ Config::get('app.url') }}#!/pages/terms_of_use">Terms and Conditions</a>
                                                                        </td>

                                                                    </tr>

                                                                </tbody>

                                                            </table>

                                                        </td>

                                                    </tr>

                                                    <tr>

                                                        <td height="30" style="font-size:30px;line-height:30px" colspan="1">&nbsp;</td>

                                                    </tr>

                                                </tbody>

                                            </table>

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>
    </body>    
</html>