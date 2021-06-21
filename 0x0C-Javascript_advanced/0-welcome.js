function welcome(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`

    function displayFullName() {
        window.alert(`welcome ${fullName}!`)
    }
    displayFullName()
}