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
            'src': 'images/巴旦木.png',
            'name': '干剥巴旦木',
            'price': '￥58.8元'
        }, {
            'src': 'images/开口松子.png',
            'name': '开口松子',
            'price': '￥68.8元'
        }, {
            'src': 'images/夏威夷果.png',
            'name': '夏威夷果',
            'price': '￥78.8元'
        }, {
            'src': 'images/山核桃仁.png',
            'name': '山核桃仁',
            'price': '￥88.8元'
        }];

        var ImagesList2 = [{
            'src': 'images/猪肉脯2.png',
            'name': '猪肉脯',
            'price': '￥68.8元'
        }, {
            'src': 'images/手撕长鸭脖.png',
            'name': '手撕长鸭脖',
            'price': '￥75.5元'
        }, {
            'src': 'images/蜀香牛肉.png',
            'name': '蜀香牛肉',
            'price': '￥108.8元'
        }, {
            'src': 'images/奥尔良小鸡腿.png',
            'name': '奥尔良小鸡腿',
            'price': '￥188.8元'
        }];

        var ImagesList3 = [{
            'src': 'images/开心果.png',
            'name': '开心果',
            'price': '￥38.8元'
        }, {
            'src': 'images/蔓越莓曲奇.png',
            'name': '蔓越莓曲奇',
            'price': '￥48.8元'
        }, {
            'src': 'images/干剥巴旦木.png',
            'name': '干剥巴旦木',
            'price': '￥75.5元'
        }, {
            'src': 'images/香酥小黄鱼.png',
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