
exports.isEmpty = value => {
    if (value == '') return true;
    else return false;
}

exports.isEmail = value => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

exports.validateSignupData = data => {
    let errors = {};;

    if (this.isEmpty(data.email)) {
        error.email = "Must not be empty";
    } else if (!this.isEmail(data.email)) {
        errors.email = "Must be a valid email address";
    }

    if (this.isEmpty(data.password)) errors.password = "Must not be empty";
    if (data.password !== data.confirmPassword) errors.confirmPassword = "Password must match";
    if (this.isEmpty(data.handle)) errors.handle = "Must not be empty";

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.validateLoginData = data => {
    let errors = {};

    if (this.isEmpty(data.email)) {
        error.email = "Must not be empty";
    } else if (!this.isEmail(data.email)) {
        errors.email = "Must be a valid email address";
    }

    if (this.isEmpty(data.password)) errors.password = "Must not be empty";

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.reduceUserDetails = (data) => {
    let userDetails = {};
    if (!this.isEmpty(data.bio.trim())) userDetails.bio = data.bio;
    if (!this.isEmpty(data.website.trim())) {
        if (data.website.trim().substring(0, 4) !== 'http') {
            userDetails.website = `http://${data.website.trim()}`
        } else {
            userDetails.website = data.website;
        }
    }
    if (!this.isEmpty(data.location.trim())) userDetails.location = data.location;

    return userDetails;
}