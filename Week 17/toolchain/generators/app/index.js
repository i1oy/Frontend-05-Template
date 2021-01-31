var Generator = require("yeoman-generator");

module.exports = class extends (
    Generator
) {
    method1() {
        this.log("method 1 just ran");
    }

    method2() {
        this.log("method 2 just ran");
    }

    async writing() {
        this.fs.copyTpl(
            this.templatePath("t.html"),
            this.destinationPath("public/index.html"),
            { title: "Templating with Yeoman" }
        );
    }
};
