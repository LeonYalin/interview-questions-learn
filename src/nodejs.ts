import { delimeterMsg, logF, logToHTML } from "./utils";

function nodejsQuestions() {
  logToHTML(`
    NodeJS questions:

    =========================================================
      
    - Benefits of using NodeJS:

    -> - Great performance
      - Javascript both on client and server
      - Typescript + existing JavaScript ecosystem

    =========================================================
      
    -  How NodeJS works:

    -> - Process model: NodeJS runs on a single process and single thread, which improves performance.
        NodeJS uses event loop async model for handling requests.
      - Event loop: every request to server becomes async (a.k.a event).
        After work is finished, NodeJS executes a callback. In meanwhile, NodeJS can receive another request.

    =========================================================
      
    -  Error-first callback:

    -> - Error-first callback is a pattern where in a callback, the first argument is always an error.
      fs.readFile( "file.json", function ( err, data ) {
        if ( err ) {
          console.error( err );
        }
        console.log( data );
      });

    =========================================================
      
    -  Callback hell:

    -> - Callback hell is a result of nesting of many async functions. Use promises or async/await to solve the issue.
      getData(function(a){
          getMoreData(a, function(b){
              getMoreData(b, function(c){ 
                  getMoreData(c, function(d){ 
                    getMoreData(d, function(e){ 
                      ...
                  });
                });
              });
          });
      });

    =========================================================
      
    -  EventEmitter in NodeJS:

    -> - EventEmitter is a pubsub library for NodeJS. It allows to emit(publish) and attach listeners(subscribe) to communicate asyncroniously.
      const events = require('events');
      const eventEmitter = new events.EventEmitter();

      eventEmitter.addListener('connection', () => {
        console.log('listener executed.');
      });
      eventEmitter.emit('connection');

    =========================================================
      
    -  Streams in NodeJS:

    -> - There are 4 types of streams in NodeJS:
      - Readable: used for reading
      - Writable: used for writing
      - Duplex: used for both reading and writing
      - Transform: a type of duplex where the output is based on input
      - Stream events we can subscribe to: 'data', 'end', 'error', 'finish'

      - Streams can be piped and chained:
      fs.createReadStream('input.txt')
      .pipe(zlib.createGzip())
      .pipe(fs.createWriteStream('input.txt.gz'));

    =========================================================
      
    -  How does Node.js handle child threads:

    -> - Node.js is a single threaded language which in background uses multiple threads to execute asynchronous code.
      - Nodejs Primary application runs in an event loop, which is in a single thread.
      - Background I/O is running in a thread pool that is only accessible to C/C++ or other compiled/native modules and mostly transparent to the JS.
      - Node v11/12 now has experimental worker_threads, which is another option.
      - Node.js does support forking multiple processes ( which are executed on different cores ).
      - It is important to know that state is not shared between master and forked process.
      - We can pass messages to forked process ( which is different script ) and to master process from forked process with function send.
      - The Cluster module is one of the core Node.js modules and it allows running multiple Node.js worker processes that will share the same port.
      .pipe(fs.createWriteStream('input.txt.gz'));

    =========================================================
      
    - Resolving unhandled exceptions in Node.js:

    -> - process.on('uncaughtException', function(err) {
          console.log('Caught exception: ' + err);
      });
    `);
}

export default function nodejs() {
  delimeterMsg('NODEJS');
  logF(nodejsQuestions);
}