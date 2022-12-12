## Generated code JSON format

```JSON
{
 name: "Element name",
 text: "text"
 children: [JSON1,JSON2,...],
 style:{
    property1:value1,
    property2:value2
 }
 attributes: {
    attribute1:value1,
    attribute2:value2
    }
}
```

### Example

```HTML
<div id="div1" style="color:red">
    <p>
        This is text
    </p>
</div>
```

```JSON
{
    name:"div",
    text:"",
    children:[{
        name:"p",
        text:"This is text",
        children:[],
        style:{}
        attributes:{}
    }],
    style:{
        color:"red"
    }
    attributes:{
        id:"div1"
    }
}
```
