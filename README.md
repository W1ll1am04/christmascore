# christmascore

a library with some christmas functions

## Summary

  - [Getting Started](#getting-started)
  - [Including & Using](#Including&Using)
  - [Requirements](#Requirements)
  - [Authors](#Authors)
  - [License](#License)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.

## Including&Using

Clone and Include it:

### **Including**
```
<script src="christmascore.js"></script>
```

Or alternatively:
```
<script src=""></script>
```

### **Usage**
Specify what day of december you want to be christmas day, for me thats the 24th:

Optionally you dont have to specify this, because it defaults to false.
```
var christmas = new christmascore("24", false);
```

List of all functions:
```
UntilChristmas() - returns the number of days until christmas.
UntilDecemeber() - returns the number of days until december.

SecretSantaSelector() - requires a list like ["Harry", "Ron", "Fred", "George"] to be passed to it, the list is required to be even.
It returns a dict. You can call whoever got who by calling the a member of the list you entered. ["Ron"] would output for example "Harry".

Isitdecember() - returns a boolean value on if its december or not.

Greeting() - Optionally takes a list like ["Happy new year", "Happy Holidays", "Merry Christmas"] but it isnt required and has a default list,
so if you dont pass anything you get either of ["Happy christmas", "Merry Christmas", "Happy Holidays", "Let it snow, Let it snow, Let it snow"]
```
Additional:

Include the ``christmascoreutils.js``, it has no extra for the user but improves ``christmascore.js``'s debugging capability. 
Instead of ```christmascore: participants is uneven.``` you get error types, like EXCEPTION, ERROR, WARNING & DEBUG. 

The error message output would look something more like this:

```ERROR [11/12/2020] [christmascore] [SecretSantaSelector] participants is uneven.``` 

## Requirements
  [ES6+ Support](https://www.w3schools.com/js/js_es6.asp)

## Authors

  **William E.I** - [W1ll1am04](https://github.com/w1ll1am04)

## License

This project is licensed under the GPL-3.0 license - see the [LICENSE](LICENSE) file for details
