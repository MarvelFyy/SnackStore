        //1.获取所有的li元素
        var lis = document.getElementById('nav-li').getElementsByTagName('a');
        for (let i = 0; i < lis.length; i++) {
            lis[i].onclick = function() {
                for (let i = 0; i < lis.length; i++) {
                    lis[i].style.color = '';
                }
                this.style.color = "white";
            }
        }

        var login = document.querySelector('#nav-li2').querySelectorAll('a');
        for (let i = 0; i < login.length; i++) {
            login[i].onclick = function() {
                for (let i = 0; i < login.length; i++) {
                    login[i].style.color = '';
                }
                this.style.color = color = "white";
            }
        }

        //图片数组

        var ImagesList1 = [{
            'src': 'http://cdn.fyy.cool/deda74f4-8080-11ea-b83b-1063c844e2a2-巴旦木.png',
            'name': '干剥巴旦木',
            'price': '￥58.8元'
        }, {
            'src': 'http://cdn.fyy.cool/a94e9db4-8081-11ea-b419-1063c844e2a2-开口松子.png',
            'name': '开口松子',
            'price': '￥68.8元'
        }, {
            'src': 'http://cdn.fyy.cool/3bad630c-8082-11ea-b388-1063c844e2a2-夏威夷果.png',
            'name': '夏威夷果',
            'price': '￥78.8元'
        }, {
            'src': 'http://cdn.fyy.cool/be79c368-8083-11ea-8612-1063c844e2a2-山核桃仁.png',
            'name': '山核桃仁',
            'price': '￥88.8元'
        }];

        var ImagesList2 = [{
            'src': 'http://cdn.fyy.cool/6a8fb11c-8082-11ea-920c-1063c844e2a2-猪肉脯2.png',
            'name': '猪肉脯',
            'price': '￥68.8元'
        }, {
            'src': 'http://cdn.fyy.cool/27bef148-8082-11ea-aabc-1063c844e2a2-手撕长鸭脖.png',
            'name': '手撕长鸭脖',
            'price': '￥75.5元'
        }, {
            'src': 'http://cdn.fyy.cool/019a6438-8083-11ea-9590-1063c844e2a2-蜀香牛肉.png',
            'name': '蜀香牛肉',
            'price': '￥108.8元'
        }, {
            'src': 'http://cdn.fyy.cool/6cfc8398-8080-11ea-805a-1063c844e2a2-奥尔良小鸡腿.png',
            'name': '奥尔良小鸡腿',
            'price': '￥188.8元'
        }];

        var ImagesList3 = [{
            'src': 'http://cdn.fyy.cool/b1750ff0-8081-11ea-967a-1063c844e2a2-开心果.png',
            'name': '开心果',
            'price': '￥38.8元'
        }, {
            'src': 'http://cdn.fyy.cool/d2ac817a-8081-11ea-b5d9-1063c844e2a2-蔓越莓曲奇.png',
            'name': '蔓越莓曲奇',
            'price': '￥48.8元'
        }, {
            'src': 'http://cdn.fyy.cool/1c135e0a-8081-11ea-8033-1063c844e2a2-干剥巴旦木.png',
            'name': '干剥巴旦木',
            'price': '￥75.5元'
        }, {
            'src': 'http://cdn.fyy.cool/4b5fa6ae-8082-11ea-8e42-1063c844e2a2-香酥小黄鱼.png',
            'name': '香酥小黄鱼',
            'price': '￥199元'
        }];



        var UniList = [];
        UniList.push(ImagesList1);
        UniList.push(ImagesList2);
        UniList.push(ImagesList3);


        //获取元素
        var toggles = document.querySelector('#nav-toggle').querySelectorAll('li');
        var images = document.querySelector('#recommend').querySelectorAll('img');
        var titles = document.querySelector('#recommend').querySelectorAll('h4');
        var price = document.querySelector('#recommend').querySelectorAll('span');


        for (let i = 0; i < toggles.length; i++) {
            toggles[i].onclick = function() {
                toggles.forEach(element => {
                    element.className = '';
                })

                for (let j = 0; j < ImagesList1.length; j++) {
                    images[j].src = UniList[i][j]['src'];
                    titles[j].innerText = UniList[i][j]['name'];
                    price[j].innerText = UniList[i][j]['price'];
                }

                this.className = 'active';
            }
        }