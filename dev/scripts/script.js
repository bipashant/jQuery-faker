/**
 * Created by bipashant on 7/3/15.
 */
/* globals require, $*/
;(function () {
  $(document).ready(function () {
    $('#form').fakify({
      '[customer][state]': 'name.fullName',
      'except': ['[customer][mname]', 'address_2', 'website']
    });
  });
})();
