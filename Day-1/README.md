# Day-1 Javascript environment setup

# Topics basic JS codes and script file organized also learn 

# Covered topics async attribute and defer attribute
   
    --async attribute: 

        While HTML is being parsed, if the browser finds a script tag with the async attribute, the script file starts downloading in parallel.

        During the script download, HTML parsing continues normally without stopping.

        When the script finishes downloading, the browser immediately pauses HTML parsing and executes the script right away.
        
        After the script finishes execution, the browser resumes HTML parsing from where it left off.


    --defer attribute (Well-organized explanation)

        While HTML is being parsed, if the browser finds a script tag with the defer attribute, the script file downloads in parallel (same time as HTML parsing).

        During the entire download process, HTML parsing never stops.

        Even after the script finishes downloading, the browser does NOT execute it immediately.

        A deferred script is executed only after the entire HTML document has been fully parsed.

        If multiple defer scripts exist, they execute in order (top to bottom) after parsing is complete.