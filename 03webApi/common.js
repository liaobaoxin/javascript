function my$(id) {
    return document.getElementById(id);
}
//设置任意的标签中间的任意文本内容
function setInnerText(element,text) {
    //判断浏览器是否支持这个属性
    if(typeof element.textContent =="undefined"){//不支持
        element.innerText=text;
    }else{//支持这个属性
        element.textContent=text;
    }
}

//获取任意标签中间的文本内容
function getInnerText(element) {
    if(typeof element.textContent=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}


//获取任意一个父级元素的第一个子级元素
function getFirstElementChild(element) {
    if(element.firstElementChild){//true--->支持
        return element.firstElementChild;
    }else{
        var node=element.firstChild;//第一个节点
        while (node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}
//获取任意一个父级元素的最后一个子级元素
function getLastElementChild(element) {
    if(element.lastElementChild){//true--->支持
        return element.lastElementChild;
    }else{
        var node=element.lastChild;//第一个节点
        while (node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}