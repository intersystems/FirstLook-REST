
This is the README file for FirstLook-REST. The end of the file has setup instructions.

Use or operation of this code is subject to acceptance of the license available in the code repository for this code.

FirstLook-REST is meant for use with the InterSystems IRIS Data Platform.  This code sample is intended to be used with [First Look: Developing REST Interfaces in InterSystems IRIS](http://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=AFL_REST).

The sample shows you how to develop REST interfaces in InterSystems IRIS to access databases and productions. You can use these REST interfaces with UI tools, such as Angular, to provide a user interface to databases and interoperability productions. You can also use them to enable external systems to access InterSystems IRIS applications.

The sample defines a database of coffee makers and provides REST interfaces to access them. Some of the REST interfaces send messages to a production.

## Setup instructions

Detailed instructions to use this sample code are provided in [First Look: Developing REST Interfaces in InterSystems IRIS](http://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=AFL_REST). 

A summary of the steps to run the sample follow:

1. Clone or download the repository. If you download a zip archive, extract the files in the archive.
2. If you have not yet created a production-enabled namespace in InterSystems IRIS, follow the detailed instructions to do so. If a production is running in the namespace, stop the production.
3. Open the InterSystems IRIS Terminal.

4. Enter the following command (replacing `<namespace>` with the namespace where you want to load the sample):
```
   ZN "<namespace>"
```
5. Enter the following commands (replacing with the full path of the buildsample/buildsamplerest.rtn file):
```
    do $system.OBJ.Load("full-path-to-buildsamplerest.rtn","ck")
    do ^buildsamplerest
```
6. Then answer any prompts.

7. Copy the coffee directory of the repository to `install-dir/CSP`.

8. In the Management Portal create a web application named `/coffee`
   
   This will use the `install-dir/CSP/coffee` directory.

9. Create another web application, this one named `/rest/coffeemakerapp`. See [First Look: Developing REST Interfaces in InterSystems IRIS](http://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=AFL_REST) for details.

10. In the Management Portal, ensure you ware in a production-enabled namespace you are using for this sample and select Interoperability > List > Productions and then open demo.CoffeeMakerProduction and start it.

11. Use a REST tool, such as [Postman](https://www.getpostman.com/), to enter the REST calls.
