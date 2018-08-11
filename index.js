class EndWebpackPlugin {

    constructor(doneCallback, failCallback) {
        this.doneCallback = doneCallback;
        this.failCallback = failCallback;
    }

    apply(compiler) {
        compiler.hooks.done.tap('EndWebpackPlugin', (stats) => {
            this.doneCallback(stats);
        });
        compiler.hooks.failed.tap('EndWebpackPlugin', (err) => {
            this.failCallback(err);
        });
    }
}

module.exports = EndWebpackPlugin;