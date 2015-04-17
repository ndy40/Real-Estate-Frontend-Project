/**
 * @requireJS Build file for @r.js to optimize (Combine and Minify) JS Files.
 *
 * Uses the requireJS configuration defined in /modules/main.js.
 * 
 * This build file Optimizes all the js files in @modules directory and puts
 * them in the @dist directory. It also copies html views to the dist directory
 * to their respective directories (since the paths defined in requireJs have to
 * be relative to to config file.
 *  
 * To re-build/ re-optimize the site, use the command "r.js -o build.js" in the
 * terminal. Running this command will delete all existing files in the dist
 * directory and create new build files.
 * 
 * @author Arslan Akram <arslanhawn@gmail.com>
 */

({
    mainConfigFile : "modules/main.js",
    removeCombined: true,
    findNestedDependencies: true,
    dir: "dist",
    name: "main"
})