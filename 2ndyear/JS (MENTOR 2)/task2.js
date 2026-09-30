function task2() {
    let arr = {
        img1:"C:\Users\deepa\Desktop\Deepak\PEP\slot 1\js(2)\bg.jpg",
        img2:"C:\Users\deepa\Desktop\Deepak\PEP\slot 1\js(2)\cook.jpeg",
        img3:"C:\Users\deepa\Desktop\Deepak\PEP\slot 1\js(2)\download.jpg"
    };

    for (let i = 0; i < arr.length; i++) {
        document.write("<img src='" + arr[i] + "' alt='Image'>");
    }
}