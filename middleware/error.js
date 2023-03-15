

// report error to the console and send appropriate response to the client
const errorHandler = (err, req, res, next) => {
    // log to console for dev
    console.log(err.stack.red);

    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || "Server Error",
    });
    next();
}

export default errorHandler;