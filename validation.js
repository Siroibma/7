$(function() {
  $("#register-form").validate({
    rules: {
      num1: {
        required: true,
        number: true,
        max: 50,
        min: -50,
        minlength: 1,
        blank: true,
        zero: true
      },
      num2: {
        required: true,
        number: true,
        max: 50,
        min: -50,
        minlength: 1,
        blank: true,
        zero: true
      },
      num3: {
        required: true,
        number: true,
        max: 50,
        min: -50,
        minlength: 1,
        blank: true,
        zero: true
      },
      num4: {
        required: true,
        number: true,
        max: 50,
        min: -50,
        minlength: 1,
        blank: true,
        zero: true
      }


    },
    messages: {
      num1: {
        required: "Please input a value from -50 to 50",
        number: 'Please Enter a Valid value',
      },
      num2: {
        required: "Please input a value from -50 to 50",
        number: 'Please Enter a Valid value'
      },
      num3: {
        required: "Please input a value from -50 to 50",
        number: 'Please Enter a Valid value'
      },
      num4: {
        required: "Please input a value from -50 to 50",
        number: 'Please Enter a Valid value'
      },
    }
  });
});

jQuery.validator.addMethod("blank", function(value, element) {
  return this.optional(element) || value == "0";
}, jQuery.validator.format("please enter a non blank space"));

jQuery.validator.addMethod("zero", function(value, element) {
  return this.optional(element) || value == "0";
}, jQuery.validator.format("please enter a non zero space"));
