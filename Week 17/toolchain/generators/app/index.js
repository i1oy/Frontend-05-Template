var Generator = require("yeoman-generator");

module.exports = class extends Generator {
    initPackages() {
        const pkgJson = {
            devDependencies: {
                eslint: "^3.15.0"
            },
            dependencies: {
                react: "^16.2.0"
            }
        };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);
    }

    async prompting() {
        // console.log(JSON.stringify(this));
        // this.answers = await this.prompt([
        //     {
        //         type: "input",
        //         name: "name",
        //         message: "Your project name",
        //         default: this.appname // Default to current folder name
        //     },
        //     {
        //         type: "confirm",
        //         name: "cool",
        //         message: "Would you like to enable the Cool feature?"
        //     }
        // ]);
        // this.log("app name", answers.name);
        // this.log("cool feature", answers.cool);
    }
    // async writing() {
    //     this.fs.copyTpl(
    //         this.templatePath("t.html"),
    //         this.destinationPath("public/index.html"),
    //         { title: this.answers.name }
    //     );
    // }
};
