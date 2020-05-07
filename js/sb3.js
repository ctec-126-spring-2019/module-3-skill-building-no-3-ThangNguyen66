// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1() {
    let output = `
    <p>Baby shark, doo doo doo doo doo doo.</p>
    <p>Baby shark, doo doo doo doo doo doo.</p>
    <p>Baby shark, doo doo doo doo doo doo.</p>
    <p>Baby shark!</p>
    `
    return output
}

function verse2() {
    let output = `
    <p>Mommy shark, doo doo doo doo doo doo.</p>
    <p>Mommy shark, doo doo doo doo doo doo.</p>
    <p>Mommy shark, doo doo doo doo doo doo.</p>
    <p>Mommy shark!</p>
    `

    return output
}

function verse3() {
    let output = `
    <p>Daddy shark, doo doo doo doo doo doo.</p>
    <p>Daddy shark, doo doo doo doo doo doo.</p>
    <p>Daddy shark, doo doo doo doo doo doo.</p>
    <p>Daddy shark!</p>
    `

    return output
}

function verse4() {
    let output = `
    <p>Grandma shark, doo doo doo doo doo doo.</p>
    <p>Grandma shark, doo doo doo doo doo doo.</p>
    <p>Grandma shark, doo doo doo doo doo doo.</p>
    <p>Grandma shark!</p>
    `

    return output
}

function verse5() {
    let output = `
    <p>Granpa shark, doo doo doo doo doo doo.</p>
    <p>Granpa shark, doo doo doo doo doo doo.</p>
    <p>Granpa shark, doo doo doo doo doo doo.</p>
    <p>Granpa shark!</p>
    `

    return output
}

function chorus1() {
    let output = `
    <p>Let’s go hunt, doo doo doo doo doo doo.</p>
    <p>Let’s go hunt, doo doo doo doo doo doo.</p>
    <p>Let’s go hunt, doo doo doo doo doo doo.</p>
    <p>Let’s go hunt!</p>
    `

    return output
}

function chorus2() {
    let output = `
    <p>Run away, doo doo doo doo doo doo.</p>
    <p>Run away, doo doo doo doo doo doo.</p>
    <p>Run away, doo doo doo doo doo doo.</p>
    <p>Run away!</p>
    `

    return output
}

function chorus3() {
    let output = `
    <p>Safe at last, doo doo doo doo doo doo.</p>
    <p>Safe at last, doo doo doo doo doo doo.</p>
    <p>Safe at last, doo doo doo doo doo doo.</p>
    <p>Safe at last!</p>
    `

    return output
}

function chorus4() {
    let output = `
    <p>It’s the end, doo doo doo doo doo doo.</p>
    <p>It’s the end, doo doo doo doo doo doo.</p>
    <p>It’s the end, doo doo doo doo doo doo.</p>
    <p>It’s the end!</p>
    `

    return output
}



function main() {
    let finalOutput = '' // used to build lyrics string
    finalOutput = verse1() + "<br>" + verse2() + "<br>" + verse3() + "<br>" + verse4() + "<br>" + verse5() + "<br>" + chorus1() + "<br>" + chorus2() + "<br>" + chorus3() + "<br>" + chorus4()
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput
}

window.onload = function () {
    main()
}