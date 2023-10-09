// Define a middleware function called setFlash that will be used to set flash messages for the response.
module.exports.setFlash = function(req, res, next) {
    // Create a property called 'flash' in the 'res.locals' object to store flash messages.
    res.locals.flash = {
        'success': req.flash('success'), // Store success flash messages from the 'req.flash' method.
        'error': req.flash('error')     // Store error flash messages from the 'req.flash' method.
    };

    // Call the 'next()' function to pass control to the next middleware or route handler in the chain.
    next();
}
