const images = [
    'https://pp.userapi.com/c831108/v831108800/1d8614/053WCB2Vd2c.jpg',
    'https://pp.userapi.com/c543108/v543108451/2aae6/Bhft3TWYaig.jpg',
    'https://pp.userapi.com/c840426/v840426965/16b5c/Hk60VvA_VaI.jpg',
    'https://pp.userapi.com/c841427/v841427234/2bbfb/MwQ8o8dqr5s.jpg',
    'https://pp.userapi.com/c837734/v837734331/5503f/SvQCVklJqY4.jpg',
    'https://pp.userapi.com/c637325/v637325633/fc41/I-lz63CEk_8.jpg',
    'https://pp.userapi.com/c836323/v836323181/4b372/BOeWJH7xz6M.jpg',
    'https://pp.userapi.com/c840124/v840124209/1824e/adPDtJpTtcU.jpg',
    'https://pp.userapi.com/c639726/v639726888/1cc96/qvguuGseZVo.jpg',
    'https://pp.userapi.com/c543108/v543108623/2abc3/RUImuIT0edg.jpg',
    'https://pp.userapi.com/c837625/v837625557/31409/_XYyeQHs8EE.jpg',
    'https://pp.userapi.com/0mXtzIuI-UwDZ8zCTYGTl2TPOmjRq09niPirfw/KwSYwzNGEyc.jpg',
    'https://pp.userapi.com/zRcgC_jsgbX6IJGFuDuvCo09nj1hzs4V1b8Ltw/ikp7Z7vq4xM.jpg',
    'https://pp.userapi.com/c638431/v638431333/2621e/Q1jUdhtod3w.jpg',
    'https://pp.userapi.com/c637828/v637828628/347da/OUgag4a6WvY.jpg',
    'https://pp.userapi.com/JYmr7zWTSaCwcHuBdybkcr-5NN-OTdnQEQGApg/k51FRpKlYWQ.jpg',
    'https://pp.userapi.com/c630119/v630119814/4d6d1/lnJ5EVrZ9J0.jpg',
    'https://pp.userapi.com/c630120/v630120814/442a8/nINynfgQmFA.jpg',
    'https://pp.userapi.com/c543105/v543105246/8c52/2wbqJoQSu34.jpg',
    'https://pp.userapi.com/LPPE4B6owCWUrKKtv3eDPj5_ioCPUBwosnvgXw/Gq7cHZKlXbI.jpg',
    'https://pp.userapi.com/c540100/v540100121/5e5d5/A6ZmbQqqkZE.jpg',
    'https://pp.userapi.com/c543104/v543104778/4e9b5/5KJCiFE6L_Q.jpg',
    'https://sun3.ufanet.userapi.com/c851228/v851228753/16bfe1/SSmLOFNFkYo.jpg',
    'https://pp.userapi.com/c850736/v850736024/15f3b3/lI2cMsvuO6U.jpg',
    'https://pp.userapi.com/c851528/v851528094/16391a/5BSeXTCn4Cg.jpg',
    // ''
];

const results = [];


const getImage = (url) => {

    return new Promise((resolve, reject) => {

        if (!url) {
            reject({
                url: url,
                error: true,
                message: 'Invalid string'
            })
        }

        setTimeout(() => {
            resolve({
                url: url,
                date: new Date()
            })
        }, 1000)

    })
};


const arrayChunk = (array, size) => Array.from(
    {length: Math.ceil(array.length / size)},
    (value, key) => array.slice(key * size, key * size + size)
);


/**
 * Функция на промисах
 * @param arr: array, массив изображений
 * @param resultArray: array, резульирующий массив
 */
const fetchImages_1 = (arr, resultArray) => {
    const imagesArr = arrayChunk(arr, 2);

    Promise.all(
        imagesArr.map(stream => {
            return Promise.all(
                stream.map(item => {
                    return getImage(item)
                })
            )
        })
    ).then(result => {
    	result.map(item => {
    	    resultArray.push(...item)
    	});

        console.log(resultArray);  // показываем результирующий массив

    }).catch(error => console.log(error))
};


/**
 * Функция на асинках
 * @param arr: array, массив изображений
 * @param resultArray: array, резульирующий массив
 * @returns {Promise<void>}
 */
async function fetchImages_2(arr, resultArray) {
    const imagesArr = arrayChunk(arr, 2);

    try {

        const result = await Promise.all(
            imagesArr.map(stream => {
                return Promise.all(
                    stream.map(item => {
                        return getImage(item)
                    })
                )
            })
        );
        result.map(item => {
            resultArray.push(...item)
        });

        console.log(resultArray);  // показываем результирующий массив

    } catch (error) {
        console.log(error)
    }
}


fetchImages_1(images, results);

// fetchImages_2(images, results);
