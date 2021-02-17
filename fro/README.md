9 видео 8.22

Страница 404

10 видео 13.03

!!!!!!!пошаговая инструкция для страницы Подробно !!!!!!!!!!!!!!

1 подключаем глобальный стейт к компоненту где есть все продукты
=====пример: const state = useContext(GlobalState) =====

2 вытаскиваем из глобального стейта  переменную с  массивом продуктов

=======пример:  const [products] = state.poductsData.products ===========

3 создаем переменную черех хук с айдишником страницы

=====пример: const params = useParams()====

4 задаем стейт в функции через хуки 

====пример:  const [detailProduct,setDetailProduct] = useState([])

5 через Хук useEffect при первой загрузке страницы Подробно  ищем айдишник одного продукта с которого была нажата кнопка Подробно и устанавливаем зависимости от переменных  2 и 3 пункта

   useEffect(()=>{
    if(params){
      products.forEach(x=>{
        if(x._id === params.id)setDetailProduct(x)
      })
    }
  },[params,products])

6 Теперь в переменной detailProduct  у нас есть его параметры далее достаем переменные через точку

======пример:  detailProduct.title =====

7 если  в detailProduct пусто возвращаем null  перед return ставим

====  пример: if(detailProduct.length === 0 ) return null 

return(бла бла)  ====


!!!! Выводим на странице Подробно все товары из категории товара который на странице подробно  !!!!!

пример:   {
              products.map(item=>{
                return item.category === detailProduct.category ?
                <Product key={item._id} product={item} /> :null
              })
            }




Остановился на 14vid -6.22  перешол к 15 видео

Остановился на 15vid -22.34
