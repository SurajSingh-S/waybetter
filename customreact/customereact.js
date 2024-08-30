function customrender (reactelement,container){

}

const reactelement={
    type:'a',
    prop:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click meeeee'
}

const container= document.queryselector('#root')

customrender(reactelement,container)
