var ms_utils = {

  detectLeftButton: function (e) {
    if ('buttons' in e) {
      return e.buttons === 1;
    } else if ('which' in e) {
      return e.which === 1;
    } else {
      return e.button === 1;
    }
  }

};
