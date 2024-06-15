const errors = [
  {
    value: "",
    msg: "the field is required.",
    param: "name",
    location: "body",
  },
  {
    value: "",
    msg: "the field is required.",
    param: "role",
    location: "body",
  },
  {
    value: "s3cret",
    msg: "must be atleast 8 characters",
    param: "password",
    location: "body",
  },
];

errors.map((el) => {
  if (el.param == "name") {
    console.log(el.msg);
  }
});
