# Node.js HTTP Server Hanging Bug

This repository demonstrates a subtle bug in a Node.js HTTP server where omitting the `Content-Type` header in the response can cause the server to hang.  The issue is that the client might not know how to handle the response without this header leading to a stalled connection.

## Bug Description
The provided `bug.js` file contains a minimal HTTP server.  If you run it and make a request, the server will hang indefinitely if the `Content-Type` header is commented out, even though it's sending a response.

## Solution
The solution, provided in `bugSolution.js`, simply adds the `Content-Type` header to the response. This resolves the hanging issue and allows the client to process the response correctly.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Make a request to `http://localhost:3000` (e.g., using `curl` or a browser).
4. Observe that the server hangs.
5. Uncomment the `res.setHeader('Content-Type', 'text/plain');` line in `bug.js` or run `node bugSolution.js`.
6. Make another request; the server will respond correctly.

This example highlights the importance of setting appropriate headers in HTTP responses for proper client-server communication.