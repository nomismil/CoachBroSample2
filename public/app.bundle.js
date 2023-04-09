/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/Switch.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/Redirect.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/Route.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/HashRouter.js\");\n/* harmony import */ var _Trainings_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trainings.jsx */ \"./src/Trainings.jsx\");\n/* harmony import */ var _Bookings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bookings.jsx */ \"./src/Bookings.jsx\");\n/* harmony import */ var _Transactions_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transactions.jsx */ \"./src/Transactions.jsx\");\n/* harmony import */ var _Settings_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Settings.jsx */ \"./src/Settings.jsx\");\n/* harmony import */ var _Login_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login.jsx */ \"./src/Login.jsx\");\n/* harmony import */ var _Registrations_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Registrations.jsx */ \"./src/Registrations.jsx\");\n\n\n\n\n\n\n\n\n\n/*\n* HOMEPAGE SECTION\n*/\nclass CoachbroHome extends React.Component {\n  constructor() {\n    super();\n  }\n  async login(loginAcc) {\n    const query = `query loginMember($loginAcc: InputLogin!) {\n      loginMember(loginAcc: $loginAcc)\n    }`;\n    const response = await fetch('http://localhost:3000/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query,\n        variables: {\n          loginAcc\n        }\n      })\n    });\n    const body = await response.text();\n    const res = JSON.parse(body);\n    if (res.data.loginMember === 'error') {\n      alert(\"Incorrect username / password!\");\n    } else {\n      window.localStorage.setItem(\"memberID\", res.data.loginMember);\n      window.location.href = \"/#/\";\n    }\n  }\n  async register(newMember) {\n    const query = `mutation addMember($newMember: InputMember!) {\n      addMember(newMember: $newMember){\n        id\n      }\n    }`;\n    const response = await fetch('http://localhost:3000/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query,\n        variables: {\n          newMember\n        }\n      })\n    });\n    if (response.status === 200) {\n      alert(\"Successfully registered.\");\n    }\n  }\n  async checkUsername(username) {\n    const query = `query checkUsername($username: String!) {\n     checkUsername(username: $username)\n    }`;\n    const response = await fetch('http://localhost:3000/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query,\n        variables: {\n          username\n        }\n      })\n    });\n    const body = await response.text();\n    const res = JSON.parse(body);\n    return res.data.checkUsername;\n  }\n  async getTransactions(memberID) {\n    const query = `query getTransactions($memberId: String!) {\n      getTransactionsByMemberId(userId: $memberId){\n        id\n        userId\n        trainerId\n        dateReceived\n        cost\n        type\n      }\n    }`;\n    const response = await fetch('http://localhost:3000/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query,\n        variables: {\n          memberId: memberID\n        }\n      })\n    });\n    const body = await response.text();\n    const res = JSON.parse(body);\n    return res.data.getTransactionsByMemberId;\n  }\n  async getTrainingById(trainingID) {\n    // TO-DO: Query and Response\n  }\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      exact: true,\n      from: \"/\",\n      to: \"/trainings\"\n    }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      path: \"/login\"\n    }, /*#__PURE__*/React.createElement(_Login_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      login: this.login\n    })), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      path: \"/register\"\n    }, /*#__PURE__*/React.createElement(_Registrations_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      addMember: this.register,\n      checkUsername: this.checkUsername\n    })), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      path: \"/trainings\"\n    }, /*#__PURE__*/React.createElement(_Trainings_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      path: \"/bookings\"\n    }, /*#__PURE__*/React.createElement(_Bookings_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      path: \"/transactions\"\n    }, /*#__PURE__*/React.createElement(_Transactions_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      getTransactions: this.getTransactions\n    })), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      path: \"/settings\"\n    }, /*#__PURE__*/React.createElement(_Settings_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n  }\n}\nconst element = /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, /*#__PURE__*/React.createElement(CoachbroHome, null));\nReactDOM.render(element, document.getElementById('contents'));\n\n//# sourceURL=webpack://coachbro/./src/App.jsx?");

/***/ }),

/***/ "./src/Bookings.jsx":
/*!**************************!*\
  !*** ./src/Bookings.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Navbar_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.jsx */ \"./src/Navbar.jsx\");\n\nclass Bookings extends React.Component {\n  constructor() {\n    super();\n  }\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_Navbar_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/React.createElement(\"h3\", null, \"Your Bookings\")));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bookings);\n\n//# sourceURL=webpack://coachbro/./src/Bookings.jsx?");

/***/ }),

/***/ "./src/Login.jsx":
/*!***********************!*\
  !*** ./src/Login.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Login extends React.Component {\n  constructor() {\n    super();\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n  handleSubmit(e) {\n    e.preventDefault();\n    const form = document.forms.loginform;\n    const member = {\n      username: form.username.value,\n      password: form.password.value,\n      accountType: form.accountType.value\n    };\n    this.props.login(member);\n    form.username.value = \"\";\n    form.password.value = \"\";\n  }\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"login\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"auth-form-container\"\n    }, /*#__PURE__*/React.createElement(\"h2\", {\n      className: \"auth-form-header\"\n    }, \"Welcome to CoachBRO!\"), /*#__PURE__*/React.createElement(\"form\", {\n      name: \"loginform\",\n      className: \"login-form\",\n      onSubmit: this.handleSubmit\n    }, /*#__PURE__*/React.createElement(\"label\", null, \"Username:\"), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      placeholder: \"username\",\n      name: \"username\"\n    }), /*#__PURE__*/React.createElement(\"label\", null, \"Password:\"), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"password\",\n      placeholder: \"********\",\n      name: \"password\"\n    }), /*#__PURE__*/React.createElement(\"label\", null, \"Account Type:\"), /*#__PURE__*/React.createElement(\"select\", {\n      name: \"accountType\"\n    }, /*#__PURE__*/React.createElement(\"option\", null, \"Ordinary\"), /*#__PURE__*/React.createElement(\"option\", null, \"Trainer\")), /*#__PURE__*/React.createElement(\"button\", {\n      className: \"loginButton\"\n    }, \"Log In\")), /*#__PURE__*/React.createElement(\"a\", {\n      href: \"/#/register\"\n    }, /*#__PURE__*/React.createElement(\"button\", {\n      className: \"login-register-link-btn\"\n    }, \"Don't have an account? Register here.\"))), /*#__PURE__*/React.createElement(\"footer\", {\n      className: \"privacy-notice\"\n    }, /*#__PURE__*/React.createElement(\"p\", null, \"This site uses cookies. By continuing to use this site, you agree to our use of cookies. For more details, please see our\", \" \", /*#__PURE__*/React.createElement(\"a\", {\n      href: \"https://www.nus.edu.sg/privacy-notice/\"\n    }, \"Privacy Policy\")))));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://coachbro/./src/Login.jsx?");

/***/ }),

/***/ "./src/Navbar.jsx":
/*!************************!*\
  !*** ./src/Navbar.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\n* NAVBAR SECTION\n*/\nconst NavbarMapping = [{\n  title: \"Trainings\",\n  icon: /*#__PURE__*/React.createElement(\"img\", {\n    src: \"./Assets/trainings.png\",\n    width: 25,\n    height: 25,\n    alt: \"\"\n  }),\n  link: \"/#/trainings\"\n}, {\n  title: \"Bookings\",\n  icon: /*#__PURE__*/React.createElement(\"img\", {\n    src: \"./Assets/bookings.png\",\n    width: 25,\n    height: 25,\n    alt: \"\"\n  }),\n  link: \"/#/bookings\"\n}, {\n  title: \"Transactions\",\n  icon: /*#__PURE__*/React.createElement(\"img\", {\n    src: \"./Assets/transactions.png\",\n    width: 25,\n    height: 25,\n    alt: \"\"\n  }),\n  link: \"/#/transactions\"\n}, {\n  title: \"Settings\",\n  icon: /*#__PURE__*/React.createElement(\"img\", {\n    src: \"./Assets/settings.png\",\n    width: 25,\n    height: 25,\n    alt: \"\"\n  }),\n  link: \"/#/settings\"\n}];\nclass Navbar extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      memberID: \"\"\n    };\n  }\n  componentDidMount() {\n    this.setState({\n      memberID: window.localStorage.getItem(\"memberID\")\n    });\n  }\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"nav\", {\n      id: \"navbar\"\n    }, /*#__PURE__*/React.createElement(\"ul\", {\n      id: \"navbarList\"\n    }, /*#__PURE__*/React.createElement(\"img\", {\n      src: \"./Assets/coachbroLogo.png\",\n      width: 200,\n      height: 200,\n      alt: \"\"\n    }), NavbarMapping.map((val, key) => {\n      return /*#__PURE__*/React.createElement(\"li\", {\n        key: key,\n        id: \"navbarRow\",\n        onClick: () => {\n          window.location.href = val.link;\n        }\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        id: \"icon\"\n      }, val.icon), /*#__PURE__*/React.createElement(\"div\", {\n        id: \"title\"\n      }, val.title));\n    }))), this.state.memberID === \"\" ? /*#__PURE__*/React.createElement(\"div\", {\n      className: \"toprightSignIn\"\n    }, /*#__PURE__*/React.createElement(\"button\", {\n      className: \"log\",\n      onClick: () => {\n        window.location.href = \"/#/login\";\n      }\n    }, \"Log in\"), /*#__PURE__*/React.createElement(\"button\", {\n      className: \"reg\",\n      onClick: () => {\n        window.location.href = \"/#/register\";\n      }\n    }, \"Sign up\")) : /*#__PURE__*/React.createElement(\"div\", {\n      className: \"toprightSignOut\"\n    }, /*#__PURE__*/React.createElement(\"p\", null, \"memberID: \", this.state.memberID), /*#__PURE__*/React.createElement(\"button\", {\n      onClick: () => {\n        window.localStorage.setItem(\"memberID\", \"\");\n        window.location.href = \"/#/login\";\n      }\n    }, \"Logout\")));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n//# sourceURL=webpack://coachbro/./src/Navbar.jsx?");

/***/ }),

/***/ "./src/Registrations.jsx":
/*!*******************************!*\
  !*** ./src/Registrations.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Registrations)\n/* harmony export */ });\n/* harmony import */ var _Navbar_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.jsx */ \"./src/Navbar.jsx\");\n\nfunction Registrations(props) {\n  let memberExist = false;\n  const onBlur = async e => {\n    // after user enters username, send to backend to check if it exists\n    let username = e.target.value;\n    memberExist = await props.checkUsername(username);\n    const inp = document.getElementById(\"usrname\");\n    if (memberExist) {\n      inp.setCustomValidity(\"Username already exists.\"); // this will prevent submission of form\n    } else {\n      inp.setCustomValidity(\"\");\n    }\n  };\n  const handleSubmit = async e => {\n    e.preventDefault();\n    const form = document.forms.register;\n    if (!memberExist) {\n      const member = {\n        username: form.username.value,\n        password: form.password.value,\n        accountType: form.accountType.value,\n        firstName: form.firstName.value,\n        lastName: form.lastName.value,\n        email: form.email.value,\n        gender: form.gender.value,\n        contact: form.contact.value,\n        username: form.username.value,\n        address: form.address.value,\n        dob: form.dob.value\n      };\n      props.addMember({\n        firstName: member.firstName,\n        lastName: member.lastName,\n        accountType: member.accountType,\n        email: member.email,\n        gender: member.gender,\n        contactNo: member.contact,\n        username: member.username,\n        password: member.password,\n        address: member.address,\n        dob: member.dob\n      });\n      form.reset();\n      memberExist = false;\n      window.location.href = \"/#/login/\"; // redirect \n    }\n  };\n\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"login\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"auth-form-container\"\n  }, /*#__PURE__*/React.createElement(\"h3\", null, \"New Member Registrations\"), /*#__PURE__*/React.createElement(\"form\", {\n    name: \"register\",\n    className: \"login-form\",\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/React.createElement(\"label\", null, \"First Name:\"), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"First Name\",\n    name: \"firstName\",\n    required: true\n  }), /*#__PURE__*/React.createElement(\"label\", null, \"Last Name:\"), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Last Name\",\n    name: \"lastName\",\n    required: true\n  }), /*#__PURE__*/React.createElement(\"label\", null, \"Account Type:\"), /*#__PURE__*/React.createElement(\"select\", {\n    name: \"accountType\",\n    required: true\n  }, /*#__PURE__*/React.createElement(\"option\", null, \"Ordinary\"), /*#__PURE__*/React.createElement(\"option\", null, \"Trainer\")), /*#__PURE__*/React.createElement(\"label\", null, \"Email:\"), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"email\",\n    placeholder: \"Email\",\n    name: \"email\",\n    required: true\n  }), /*#__PURE__*/React.createElement(\"label\", null, \"Gender:\"), /*#__PURE__*/React.createElement(\"select\", {\n    name: \"gender\",\n    required: true\n  }, /*#__PURE__*/React.createElement(\"option\", null, \"Female\"), /*#__PURE__*/React.createElement(\"option\", null, \"Male\")), /*#__PURE__*/React.createElement(\"label\", null, \"Contact Number:\"), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"tel\",\n    placeholder: \"Contact\",\n    name: \"contact\",\n    required: true\n  }), /*#__PURE__*/React.createElement(\"label\", null, \"Username:\"), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Username\",\n    name: \"username\",\n    id: \"usrname\",\n    required: true,\n    onBlur: onBlur\n  }), /*#__PURE__*/React.createElement(\"label\", null, \"Address:\"), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Address\",\n    name: \"address\"\n  }), /*#__PURE__*/React.createElement(\"label\", null, \"DOB:\"), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"date\",\n    placeholder: \"DOB\",\n    name: \"dob\"\n  }), /*#__PURE__*/React.createElement(\"label\", null, \"Password:\"), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"password\",\n    placeholder: \"********\",\n    name: \"password\",\n    required: true\n  }), /*#__PURE__*/React.createElement(\"button\", {\n    className: \"loginButton\",\n    onSubmit: handleSubmit\n  }, \"Register\")), /*#__PURE__*/React.createElement(\"a\", {\n    href: \"/#/login\"\n  }, /*#__PURE__*/React.createElement(\"button\", {\n    className: \"login-register-link-btn\"\n  }, \"Already have an account? Login here.\")))));\n}\n\n//# sourceURL=webpack://coachbro/./src/Registrations.jsx?");

/***/ }),

/***/ "./src/Settings.jsx":
/*!**************************!*\
  !*** ./src/Settings.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Navbar_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.jsx */ \"./src/Navbar.jsx\");\n\nclass Settings extends React.Component {\n  constructor() {\n    super();\n  }\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_Navbar_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/React.createElement(\"h3\", null, \"User Profile Settings\")));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);\n\n//# sourceURL=webpack://coachbro/./src/Settings.jsx?");

/***/ }),

/***/ "./src/Trainings.jsx":
/*!***************************!*\
  !*** ./src/Trainings.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Navbar_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.jsx */ \"./src/Navbar.jsx\");\n\nfunction Card(props) {\n  let bg_img = `url(${props.images})`;\n  let {\n    title,\n    cost,\n    dollar,\n    trainer,\n    venue,\n    vacancy,\n    des,\n    exp_date\n  } = props;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"wrapper\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"color_bg\"\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"card_img\",\n    style: {\n      \"backgroundImage\": bg_img\n    }\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"heart\"\n  }, /*#__PURE__*/React.createElement(\"svg\", {\n    xmlns: \"<http://www.w3.org/2000/svg>\",\n    viewBox: \"0 0 64 64\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z\"\n  }))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"cardInfo\"\n  }, /*#__PURE__*/React.createElement(\"h1\", null, title), /*#__PURE__*/React.createElement(\"p\", null, des, \", by \", trainer), /*#__PURE__*/React.createElement(\"p\", null, exp_date), /*#__PURE__*/React.createElement(\"p\", null, venue), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"action\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"priceGroup\"\n  }, /*#__PURE__*/React.createElement(\"p\", {\n    className: \"price\"\n  }, \"Vacancy left: \", vacancy), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"price\"\n  }, dollar, cost)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"cart\"\n  }, /*#__PURE__*/React.createElement(\"svg\", {\n    className: \"outCart\",\n    xmlns: \"<http://www.w3.org/2000/svg>\",\n    viewBox: \"0 0 64 64\"\n  }, /*#__PURE__*/React.createElement(\"path\", {\n    d: \"M2 6h10l10 40h32l8-24H16\"\n  }), /*#__PURE__*/React.createElement(\"circle\", {\n    cx: \"23\",\n    cy: \"54\",\n    r: \"4\"\n  }), /*#__PURE__*/React.createElement(\"circle\", {\n    cx: \"49\",\n    cy: \"54\",\n    r: \"4\"\n  })))))));\n}\nclass Trainings extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      trainings: []\n    };\n  }\n  componentDidMount() {\n    this.loadTrainings();\n  }\n  async loadTrainings() {\n    const query = `query listTraining {\n      listTraining {\n        id\n        trainer\n        difficulty\n        title\n        type\n        venue\n        vacancy\n        date\n        cost\n        description\n        photoURL\n      }\n    }`;\n    const response = await fetch('http://localhost:3000/graphql', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query\n      })\n    });\n    const body = await response.text();\n    const res = JSON.parse(body);\n    this.setState({\n      trainings: res.data.listTraining\n    });\n  }\n  render() {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_Navbar_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"training\"\n    }, /*#__PURE__*/React.createElement(\"p\", null, \"Filter by type:\"), /*#__PURE__*/React.createElement(\"select\", null, /*#__PURE__*/React.createElement(\"option\", null))), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"cardsContainer\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"row\"\n    }, this.state.trainings.map((val, key) => {\n      return /*#__PURE__*/React.createElement(Card, {\n        key: key,\n        title: val.title,\n        trainer: val.trainer,\n        images: val.photoURL,\n        dollar: \"$\",\n        cost: val.cost,\n        venue: val.venue,\n        vacancy: val.vacancy,\n        des: val.description,\n        exp_date: new Date(val.date).toDateString()\n      });\n    })))));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trainings);\n\n//# sourceURL=webpack://coachbro/./src/Trainings.jsx?");

/***/ }),

/***/ "./src/Transactions.jsx":
/*!******************************!*\
  !*** ./src/Transactions.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.jsx */ \"./src/Navbar.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/Redirect.js\");\n\n\n\nclass Transactions extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n    this.state = {\n      transactions: [],\n      filterList: [],\n      totalCost: 0,\n      avgCost: 0\n    };\n  }\n  calculate() {\n    this.setState({\n      totalCost: this.state.transactions.reduce((prev, curr) => {\n        return prev + curr.cost;\n      }, 0)\n    });\n    let temp = this.state.transactions.length !== 0 ? this.state.totalCost / this.state.transactions.length : 0;\n    this.setState({\n      avgCost: temp\n    });\n  }\n  componentDidMount() {\n    if (window.localStorage.getItem(\"memberID\")) {\n      this.props.getTransactions(window.localStorage.getItem(\"memberID\")).then(res => {\n        this.setState({\n          transactions: res\n        });\n        this.setState({\n          filterList: res\n        });\n        this.calculate();\n      });\n    }\n  }\n  search() {\n    var input, term, table, tr, td;\n    input = document.getElementById(\"search\");\n    term = input.value.toUpperCase();\n    table = document.getElementById(\"tbody\");\n    tr = table.getElementsByTagName(\"tr\");\n    for (var i = 0; i < tr.length; i++) {\n      td = tr[i].getElementsByTagName(\"td\");\n      if (td) {\n        var temp,\n          txtValue = \"\";\n        for (var x = 0; x < td.length; x++) {\n          temp = td[x].textContent || td[x].innerText;\n          txtValue += temp + \" \";\n        }\n        if (txtValue.toUpperCase().indexOf(term) > -1) {\n          tr[i].style.display = \"\";\n        } else {\n          tr[i].style.display = \"none\";\n        }\n      }\n    }\n  }\n  printPDF() {\n    window.print();\n  }\n  render() {\n    if (!window.localStorage.getItem(\"memberID\")) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        to: \"/login\"\n      });\n    }\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"container myTransactions\",\n      style: {\n        display: \"flex\",\n        flexDirection: \"column\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Your Transactions\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      type: \"text\",\n      id: \"search\",\n      onKeyUp: this.search,\n      placeholder: \"Search for transactions...\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Table, {\n      memberId: window.localStorage.getItem(\"memberID\"),\n      transactions: this.state.transactions\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Summary, {\n      memberId: window.localStorage.getItem(\"memberID\"),\n      totalTrainings: this.state.transactions.length,\n      totalCost: this.state.totalCost,\n      avgCost: this.state.avgCost\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      onClick: this.printPDF\n    }, \"Print Transactions\")));\n  }\n}\nconst TableHeader = props => {\n  const str = props.memberId.slice(0, 3) === \"MAO\" ? \"Coach Id\" : \"Member Id\";\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Training Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, str), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Date\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", null, \"Cost\")));\n};\nconst TableBody = props => {\n  if (props.transactions.length) {\n    var rows = props.transactions.map(item => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", {\n        key: item.id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, item.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, props.memberId.slice(0, 3) === \"MAO\" ? item.trainerId : item.userId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, new Date(item.dateReceived).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, item.cost));\n    });\n  } else {\n    rows = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", {\n    id: \"tbody\"\n  }, rows);\n};\nconst Table = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"table\", {\n    id: \"table\",\n    border: \"1px solid black\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableHeader, {\n    memberId: props.memberId\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableBody, {\n    memberId: props.memberId,\n    transactions: props.transactions\n  }));\n};\nconst Summary = props => {\n  var str1, str2, str3;\n  if (props.memberId.slice(0, 3) === \"MAO\") {\n    str1 = \"Total Trainings Attended:\";\n    str2 = \"Total Cost:\";\n    str3 = \"Average Cost:\";\n  } else {\n    str1 = \"Total Trainings Conducted:\";\n    str2 = \"Total Earnings:\";\n    str3 = \"Average Earnings:\";\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, str1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, props.totalTrainings)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, str2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, props.totalCost)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, str3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, props.avgCost)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transactions);\n\n//# sourceURL=webpack://coachbro/./src/Transactions.jsx?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=sqap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Fonts */\\nbody {margin: 0; padding: 0; font-family: 'Poppins', sans-serif;}\\n\\n/* Navbar */\\n#navbar {display: flex; float: left; position: absolute; height: 100%; width: 200px; background-color: rgb(175, 255, 225);}\\n#navbarList {height: auto; padding: 0; margin-top: 0; width: 100%;}\\n#navbarList #navbarRow {width: 100%; height: 60px; list-style-type: none; margin: 0%; display: flex; flex-direction: row; color: grey; justify-content: center; align-items: center; font-family: 'Poppins', sans-serif;}\\n#navbarList #navbarRow:hover {cursor: pointer; background-color: rgb(175, 255, 225); border-left: 10px solid rgb(45, 75, 65);}\\n#navbarRow #icon {flex: 30%; display: grid; place-items: center;}\\n#navbarRow #title {flex: 70%;}\\n\\n/* Main Container */\\n.container {display: flex; margin-left: 210px;}\\n\\n/* Login, SignUp, logout Button at corner */\\n.toprightSignIn {display: flex; float: right; margin-right: 30px; margin-top: 5px;}\\n.toprightSignOut {display: flex; float: right; flex-direction: column; margin-right: 50px; margin-top: 5px;}\\n.toprightSignIn button, .toprightSignOut button {cursor: pointer; border: 0; border-radius: 4px; font-weight: 600; margin: 0 10px; width: 100px; padding: 10px 0; box-shadow: 0 0 20px rgba(104, 85, 224, 0.2); transition: 0.4s;}\\n.toprightSignIn button:hover {color: white; box-shadow: 0 0 20px rgba(104, 85, 224, 0.6); background-color: rgba(104, 85, 224, 1);}\\n.toprightSignOut button:hover {color: white; box-shadow: 0 0 20px rgba(104, 85, 224, 0.6); background-color: rgba(104, 85, 224, 1);}\\n.reg {color: white; background-color: rgba(104, 85, 224, 1);}\\n.log {color: rgb(104, 85, 224); background-color: rgba(255, 255, 255, 1); border: 1px solid rgba(104, 85, 224, 1);}\\n\\n/* Login form container */\\n.login label {text-align: left; padding: 0.25rem 0;}\\n.login input, .login select {margin: 0.5rem 0; padding: 1rem; border-radius: 10px;}\\n.register label {text-align: left; padding: 0.25rem 0;}\\n.register input {margin: 0.5rem 0; padding: 1rem; border-radius: 10px;}\\n.login {text-align: center; display: flex; min-height: 100vh; align-items: center; justify-content: center;}\\n.register {text-align: center; display: flex; min-height: 100vh; align-items: center; justify-content: center;}\\n.auth-form-container, .login-form, .register-form {display: flex; flex-direction: column; background-color: white;}\\n.auth-form-header {color: rgb(45, 75, 65); padding-bottom: 1rem;}\\n@media screen and (min-width: 600px) {.auth-form-container {padding: 2rem; border: 2px solid rgb(45, 75, 65); border-radius: 10px; margin: 0.5rem;}}\\n.privacy-notice {position: fixed; bottom: 0; left: 0; right: 0; height: 40px;}\\n.privacy-notice p {font-size: 12px;}\\n.loginButton {border: none; background-color: rgb(45, 75, 65); padding: 15px; margin-top: 30px; margin-bottom: 30px; border-radius: 10px; cursor: pointer; color: white;}\\n.login-register-link-btn { background: none; border: none; color: -webkit-link; text-decoration: underline; cursor: pointer;}\\n\\n/* Training Cards */\\n.cardsContainer {width: 850px; height: 100vh; display: flex; justify-content: center; overflow-x: hidden; overflow-y: scroll;}\\n.row {display: flex; flex-direction: column;}\\n.card {transition: ease all .3s; width: 500px;}\\n.wrapper {margin: 60px 10px 10px; padding-top: 200px; box-sizing: border-box; position: relative; box-shadow: 0 0 20px 10px rgba(25, 25, 25, 0.1); transition: ease all .3s;}\\n.wrapper:hover {transform: translateY(-10px);}\\n.wrapper .heart{position: absolute; top: 20px; right: 20px; z-index: 1; width: 25px; height: 25px; color: red;}\\n.wrapper .heart svg, .wrapper .heart path, .wrapper .heart circle {stroke: currentColor; fill: transparent;}\\n.wrapper .heart {cursor: pointer;}\\n.color_bg {display: block; position: absolute; top: 0; left: 0; width: 100%; height: 200px; background-color: rgb(45, 75, 65);}\\n.card_img {background-size: contain; background-position: top; background-repeat: no-repeat; position: absolute; top: calc(100% - 513px); width: 100%; height: 200px; transition: ease all .3s;}\\n.cardInfo {display: block; padding: 20px 10px 5px 10px; box-sizing: border-box; font-family: 'Roboto'; color: #666;}\\n.cardInfo h1 {font-size: 20px; text-transform: uppercase; text-align: center; font-weight: bold; line-height: 1.3; margin-bottom: 10px;}\\n.cardInfo p {width: 100%; font-size: 14px; text-align: center;}\\n.action {width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 15px; box-sizing: border-box; margin-top: 15px;}\\n.priceGroup {display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column;}\\n.priceGroup .price {font-size: 18px; color: rgb(45, 75, 65); text-align: left;}\\n.cart {display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; position: relative; width: 35px; height: 35px;}\\n.cart:hover {cursor: pointer;}\\n.cart svg, .cart path, .cart circle {stroke: currentColor; fill: transparent; transition-delay: .2s;}\\n\\n/* Training type filter */\\n.training select {width: 100px; border-radius: 5px;}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://coachbro/./src/App.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./src/App.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://coachbro/./src/App.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcoachbro"] = self["webpackChunkcoachbro"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/App.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;