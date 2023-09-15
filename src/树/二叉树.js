/*
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-14 14:43:24
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-14 15:46:52
 * @FilePath: \算法\src\树\二叉树.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class BiTree{
    constructor(){
        this.rchild = null
        this.lchild = null
        this.value = null
    }
    //先序递归构建二叉树
    static CreateBiTree(arr){
        let index = 0
        let _createTree = function(node){
            if(arr[index] === '#'){
                node = null
            }else{
                node = new BiTree()
                node.value = arr[index++]
                _createTree(node.lchild)
                _createTree(node.rchild)
            }
        }
        const root = new BiTree()
        _createTree(root)
        return root
    }
    //中序遍历递归算法
    static InOrderTraverse(tree,fn){
        if(tree){
            this.InOrderTraverse(tree.lchild,fn)
            fn(tree.value)
            this.InOrderTraverse(tree.rchild,fn)
        }
    }
    //中序遍历非递归算法
    static InOrderTraverseNot(tree,fn){
        let p = tree
        let stack = []
        while(p ||stack.length){
            if(p){
                stack.push(p)
                p = tree.lchild
            }else{
                let q = stack.pop()
                fn(q)
                p = q.rchild
            }
        }
    }
}

function cout(item){
    console.log(item)
}
const tree = BiTree.CreateBiTree([1,3,4,6,'#','#','#','#',7,'#','#'])
BiTree.InOrderTraverse(tree,cout)