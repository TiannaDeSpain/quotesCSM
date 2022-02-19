# Overview

This software can be used to access information from a json file saved on a server or off site device. To run this program you simply start the server with "node server.js" and then on the client's computer or port file run the python file named "client". 

I wrote this software to better understand how networking and computure communications work, as an introduction to working with Client-Server Models. 

[Software Demo Video](https://youtu.be/vth-CMNcmQc)

# Network Communication

Built on a Client-Server Model using express js as the server side and python as the client side. 

Sofware utilitzes TCP: client side 80, server side 3000

Currently built to send JSON Objects between the server and the client. 

# Development Environment

This software was written with Visual Studio Code and run with CodeRunner V0.11.6.

Server side developed in JavaScript Node v16.13.1 with libraries:
 - express 
 - fs 

Client side developed in Python 3.10.0 with library:
 - requests


# Useful Websites

* [Client-Server model—Wikipedia](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)
* [Node JS Documentation](https://nodejs.org/en/docs/)
* [Requests- http for humans](https://docs.python-requests.org/en/latest/)
* [Articles by Victoria](https://lo-victoria.com/build-rest-api-with-nodejs-design-and-plan-restful-api)
* [Tutorials Point](https://www.tutorialspoint.com/Peer-to-Peer-Computing)

# Future Work
* Add a post and delete end point
* Create capability to send other objects like pictures
* Add better security to the end points