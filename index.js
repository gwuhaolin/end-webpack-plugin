class EndWebpackPlugin {

    constructor(doneCallback, failCallback) {
        this.doneCallback = doneCallback;
        this.failCallback = failCallback;
    }

    apply(compiler) {
        compiler.plugin('done', (stats) => {
            this.doneCallback(stats);
        });
        compiler.plugin('failed', (err) => {
            this.failCallback(err);
        });
    }
}

module.exports = EndWebpackPlugin;