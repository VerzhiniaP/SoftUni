function convert(name, lastName, hair){

    let objectName = {}
    objectName.name = name
    objectName.lastName = lastName
    objectName.hairColor = hair

    let toJson = JSON.stringify(objectName)
    console.log(toJson);
}
convert('George',
'Jones',
'Brown'
)