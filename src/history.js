"use strict";

/**
 * Put the browser history in its own module so it can be accessed anywhere in the
 * application.
 */

import createHashHistory from 'history/lib/createHashHistory'

export default createHashHistory({
	// hide the hash key (e.g. "_k=123abc")
	queryKey: false
});