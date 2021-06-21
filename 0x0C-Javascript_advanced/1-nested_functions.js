let globalVariable = "welcome"

function outer() {
    alert(globalVariable)
    let course = "Holberton"

    function inner() {
        window.alert(`${globalVariable} ${course}`)
        let exclamation = "!"

        function inception() {
            window.alert(`${globalVariable} ${course}${exclamation}`)
        }
        inception()
    }
    inner()
}
outer()