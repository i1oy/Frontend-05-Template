const Generator = require("yeoman-generator");
const chalk = require("chalk");

module.exports = class extends Generator {
    async initPackages() {
        this.answers = await this.prompt([
            {
                type: "input",
                name: "proj_name",
                message: chalk.blue("Please input project name:")
            }
        ]);
        const pkgJson = {
            name: this.answers.proj_name,
            version: "1.0.0",
            description: "",
            main: "index.js",
            scripts: {
                test: 'echo "Error: no test specified" && exit 1'
            },
            license: "ISC",
            dependencies: {}
        };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);

        // Install npm packages.
        this.npmInstall(["vue"], { "save-dev": false });
        this.npmInstall(
            [
                "webpack",
                "webpack-cli",
                "vue-loader",
                "vue-style-loader",
                "css-loader",
                "vue-template-compiler",
                "copy-webpack-plugin"
            ],
            { "save-dev": true }
        );
    }

    copyTemplFiles() {
        this.fs.copyTpl(
            this.templatePath("Hello.vue"),
            this.destinationPath("src/Hello.vue")
        );
        this.fs.copyTpl(
            this.templatePath("main.js"),
            this.destinationPath("src/main.js")
        );
        this.fs.copyTpl(
            this.templatePath("webpack.config.js"),
            this.destinationPath("webpack.config.js")
        );

        this.fs.copyTpl(
            this.templatePath("index.html"),
            this.destinationPath("src/index.html"),
            { title: this.answers.proj_name }
        );
    }

    // method2() {
    //     this.log("method 2 just ran");
    // }
};
