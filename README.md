# myscripts
This repository for showcase of my java script code base

# Table of Contents
- What is JavaScript?
- What is ECMASCript?
- What is Document Object Model (DOM) ?
- [What is Browser Object Model (BOM) ?](#BOM)

# What is JavaScript ?
JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.

# What is ECAMScript ?
ECMA Script is simply a description of a langauge implementing all of the facets described in the specification. JavaScript implements ECMAScript. On very basic level, it describe the following parts of the langauge.
- Syntax
- Types
- Statements
- Keywords
- Reserve words
- Operators
- Object

# What is Document Object Model (DOM) ?
The Document Object Model (DOM) is an application programming interface(API) for XML that was extended for use in HTML. The DOM mpas out an entire page as a hierarchy of nodes. Each part of an HTML or XML page is a type of node contaning different kinds of data.

## DOM Levels:
- DOM Level 1 
- DOM Level 2
- DOM Level 3

## DOM Level 1:
The goal of DOM Level 1 was to map out the structure of a document, It consisted of two modules: **The DOM Core** , which provide a way to map the structure of an XML-based document to allow for easy access to and manipulation of any part of a document, and **The DOM HTML**, which extended the DOM Core by adding HTML specific objects and methods.

## DOM Level 2:
DOM Level 2 introduced the foolowing new modules of the DOM to deal with new types of interfaces:
- **DOM Views** - Describes interfaces to keep track of the various views of a document. ( the document before and after CSS styling).
- **DOM Events** - Describes interfaces for events and event handling.
- **DOM Style** - Describes interfaces to deal with CSS based styling of elements.
- **DOM Traversal and Range** - Describe interfaces to traverse and manipulate a document tree.

## DOM Level 3:
DOM Level 3 further extends the DOM with the introduction of methods to load and save documents in a uniform way and methods to validate a document. In level 3, the DOM Core is extended to support all of XML1.0, including XML Infoset, XPath, and XML Base.


# <a name="BOM"></a> What is Browser Object Model (BOM) ?
The Browser Object Model (BOM) allowed access and manipulation of the browser window, Using BOM, developers can interact with the browser outside of the context of it's displayed page.Primarily, the BOM deals with the browser window and frame, but generally any browser specific extension to javaScript is considerd to be part of the BOM. The following are such extensions:
- The capability to pop-up new browser window.
- The capability to move, resize, and close browser windows.
- The *navigator* object, which provide detailed information about the browser.
- The *location* object, which gives detailed information about the page loded in the browser.
- The *screen* object, which gives detailed information about the user's screen resolution.
- Support for cookies.
- Custom object such as *XMLHttpRequest* and Internet Explorer's *ActiveXObject*.