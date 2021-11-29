describe('testing main.js', () => {
    var getWidgets
    const { renderWidgets } = require('../main')

    const response = {
        data: {
            id: "__ff0153dc0007b3d0c323f2712d04dfb1__dd6d437e43d856",
            list: [
                {
                    type: "video",
                    name: "Ιδιοκτήτης Ακινήτου - Αναθέστε το Aκίνητό σας | Blueground",
                    created: "Mon, 11 Feb 2019 06:57:52 UTC",
                    branding: "Blueground.com",
                    duration: 0,
                    views: 0,
                    thumbnail: [
                        {
                            url: "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fc4318b747dc17fdca80c6efe2e908579.jpg",
                            width: "600",
                            height: "500"
                        }
                    ],
                    categories: ["el"],
                    id: "~~V1~~-4476599409232999360~~yNkb6cssuH8e8tVR7LClv3sZi9yjv8_eIqEYhD7NB6o9ZEj1nSOh25J82sTDXEn1oWs157JoiAAXIKi9-eLaKG3GM7Q_aWDX9O8A-oTuarjB3pAXD2426g4yuaugyXYaN63gxaKde9rsWPArupdiqgPEfFLTNctf0R_0ZK-0Ze6y-JUiDYCso9yz7zNzT5vpZVO9vYXRmElxEZe4W_VJZFXBxSi4SkUpDAEwkvZ0xiObkt4RUF7qo5n_0RGv9kLOjrOGv-6iDoYLvQ6osB3pEQ",
                    origin: "sponsored",
                    url: "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__ff0153dc0007b3d0c323f2712d04dfb1__dd6d437e43d856a93932a2a2cca7fe33&response.session=v2_09683dadb8bceeaa10da81123dd7fad8_fe42260f-cfc8-4bc3-b579-b299f79b65e6-tuct89d0800_1638105728_1638105728_CNawjgYQswsYtYzXtdYvIAEoATBmOIjrCkCtkBBI6dLYA1D___________8BWABgAGiQmMHcuKuioghwAQ&item.id=%7E%7EV1%7E%7E-4476599409232999360%7E%7EyNkb6cssuH8e8tVR7LClv3sZi9yjv8_eIqEYhD7NB6o9ZEj1nSOh25J82sTDXEn1oWs157JoiAAXIKi9-eLaKG3GM7Q_aWDX9O8A-oTuarjB3pAXD2426g4yuaugyXYaN63gxaKde9rsWPArupdiqgPEfFLTNctf0R_0ZK-0Ze6y-JUiDYCso9yz7zNzT5vpZVO9vYXRmElxEZe4W_VJZFXBxSi4SkUpDAEwkvZ0xiObkt4RUF7qo5n_0RGv9kLOjrOGv-6iDoYLvQ6osB3pEQ&item.type=video&sig=5ed1d5ce91a314d9086534694a06f71cef7daec9489e&redir=https%3A%2F%2Ftry.theblueground.com%2Fathens-property-owners%2F%3Futm_campaign%3Donboarding-ath%26utm_medium%3Drefferal%26utm_source%3Dtaboola%26utm_content%3Dunb%26utm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiAY72HqmZ8RjPENYQ6x9_xSgrrG662Rqkobsj6p2TdKDyC5BCjT8LXzyO_G2mA%23tblciGiAY72HqmZ8RjPENYQ6x9_xSgrrG662Rqkobsj6p2TdKDyC5BCjT8LXzyO_G2mA&ui=fe42260f-cfc8-4bc3-b579-b299f79b65e6-tuct89d0800&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHdhdGVyMDY4OICcjuoGQIjrCkitkBBQ6dLYA1j___________8BYwjXFhDVHxgjZGMI0gMQ4AYYCGRjCJYUEJscGBhkYwi1FBDCHBgJZGMI9BQQnh0YH2R4AYABAogBvNOtxAE"
                },
                {
                    type: "video",
                    name: "Ιδιοκτήτης Ακινήτου - Αναθέστε το Aκίνητό σας | Blueground",
                    created: "Mon, 11 Feb 2019 06:57:52 UTC",
                    branding: "Blueground.com",
                    duration: 0,
                    views: 0,
                    thumbnail: [
                        {
                            url: "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fc4318b747dc17fdca80c6efe2e908579.jpg",
                            width: "600",
                            height: "500"
                        }
                    ],
                    categories: ["el"],
                    id: "~~V1~~-4476595dfh9409232999360~~yNkb6cssuH8e8tVR7LClv3sZi9yjv8_eIqEYhD7NB6o9ZEj1nSOh25J82sTDXEn1oWs157JoiAAXIKi9-eLaKG3GM7Q_aWDX9O8A-oTuarjB3pAXD2426g4yuaugyXYaN63gxaKde9rsWPArupdiqgPEfFLTNctf0R_0ZK-0Ze6y-JUiDYCso9yz7zNzT5vpZVO9vYXRmElxEZe4W_VJZFXBxSi4SkUpDAEwkvZ0xiObkt4RUF7qo5n_0RGv9kLOjrOGv-6iDoYLvQ6osB3pEQ",
                    origin: "sponsored",
                    url: "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__ff0153dc0007b3d0c323f2712d04dfb1__dd6d437e43d856a93932a2a2cca7fe33&response.session=v2_09683dadb8bceeaa10da81123dd7fad8_fe42260f-cfc8-4bc3-b579-b299f79b65e6-tuct89d0800_1638105728_1638105728_CNawjgYQswsYtYzXtdYvIAEoATBmOIjrCkCtkBBI6dLYA1D___________8BWABgAGiQmMHcuKuioghwAQ&item.id=%7E%7EV1%7E%7E-4476599409232999360%7E%7EyNkb6cssuH8e8tVR7LClv3sZi9yjv8_eIqEYhD7NB6o9ZEj1nSOh25J82sTDXEn1oWs157JoiAAXIKi9-eLaKG3GM7Q_aWDX9O8A-oTuarjB3pAXD2426g4yuaugyXYaN63gxaKde9rsWPArupdiqgPEfFLTNctf0R_0ZK-0Ze6y-JUiDYCso9yz7zNzT5vpZVO9vYXRmElxEZe4W_VJZFXBxSi4SkUpDAEwkvZ0xiObkt4RUF7qo5n_0RGv9kLOjrOGv-6iDoYLvQ6osB3pEQ&item.type=video&sig=5ed1d5ce91a314d9086534694a06f71cef7daec9489e&redir=https%3A%2F%2Ftry.theblueground.com%2Fathens-property-owners%2F%3Futm_campaign%3Donboarding-ath%26utm_medium%3Drefferal%26utm_source%3Dtaboola%26utm_content%3Dunb%26utm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiAY72HqmZ8RjPENYQ6x9_xSgrrG662Rqkobsj6p2TdKDyC5BCjT8LXzyO_G2mA%23tblciGiAY72HqmZ8RjPENYQ6x9_xSgrrG662Rqkobsj6p2TdKDyC5BCjT8LXzyO_G2mA&ui=fe42260f-cfc8-4bc3-b579-b299f79b65e6-tuct89d0800&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHdhdGVyMDY4OICcjuoGQIjrCkitkBBQ6dLYA1j___________8BYwjXFhDVHxgjZGMI0gMQ4AYYCGRjCJYUEJscGBhkYwi1FBDCHBgJZGMI9BQQnh0YH2R4AYABAogBvNOtxAE"
                }
            ]
        }
    }
    
    const badResponse = {
        data: {
            id: "__ff0153dc0007b3d0c323f2712d04dfb1__dd6d437e43d856",
            list: [
                {
                    type: "video",
                    name: "Ιδιοκτήτης Ακινήτου - Αναθέστε το Aκίνητό σας | Blueground",
                    created: "Mon, 11 Feb 2019 06:57:52 UTC",
                    branding: "Blueground.com",
                    duration: 0,
                    views: 0,
                    thumbnail: [
                        {
                            url: "http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fc4318b747dc17fdca80c6efe2e908579.jpg",
                            width: "600",
                            height: "500"
                        }
                    ],
                    categories: ["el"],
                    id: "~~V1~~-4476599409232999360~~yNkb6cssuH8e8tVR7LClv3sZi9yjv8_eIqEYhD7NB6o9ZEj1nSOh25J82sTDXEn1oWs157JoiAAXIKi9-eLaKG3GM7Q_aWDX9O8A-oTuarjB3pAXD2426g4yuaugyXYaN63gxaKde9rsWPArupdiqgPEfFLTNctf0R_0ZK-0Ze6y-JUiDYCso9yz7zNzT5vpZVO9vYXRmElxEZe4W_VJZFXBxSi4SkUpDAEwkvZ0xiObkt4RUF7qo5n_0RGv9kLOjrOGv-6iDoYLvQ6osB3pEQ",
                    origin: "sponsored",
                    url: "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__ff0153dc0007b3d0c323f2712d04dfb1__dd6d437e43d856a93932a2a2cca7fe33&response.session=v2_09683dadb8bceeaa10da81123dd7fad8_fe42260f-cfc8-4bc3-b579-b299f79b65e6-tuct89d0800_1638105728_1638105728_CNawjgYQswsYtYzXtdYvIAEoATBmOIjrCkCtkBBI6dLYA1D___________8BWABgAGiQmMHcuKuioghwAQ&item.id=%7E%7EV1%7E%7E-4476599409232999360%7E%7EyNkb6cssuH8e8tVR7LClv3sZi9yjv8_eIqEYhD7NB6o9ZEj1nSOh25J82sTDXEn1oWs157JoiAAXIKi9-eLaKG3GM7Q_aWDX9O8A-oTuarjB3pAXD2426g4yuaugyXYaN63gxaKde9rsWPArupdiqgPEfFLTNctf0R_0ZK-0Ze6y-JUiDYCso9yz7zNzT5vpZVO9vYXRmElxEZe4W_VJZFXBxSi4SkUpDAEwkvZ0xiObkt4RUF7qo5n_0RGv9kLOjrOGv-6iDoYLvQ6osB3pEQ&item.type=video&sig=5ed1d5ce91a314d9086534694a06f71cef7daec9489e&redir=https%3A%2F%2Ftry.theblueground.com%2Fathens-property-owners%2F%3Futm_campaign%3Donboarding-ath%26utm_medium%3Drefferal%26utm_source%3Dtaboola%26utm_content%3Dunb%26utm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiAY72HqmZ8RjPENYQ6x9_xSgrrG662Rqkobsj6p2TdKDyC5BCjT8LXzyO_G2mA%23tblciGiAY72HqmZ8RjPENYQ6x9_xSgrrG662Rqkobsj6p2TdKDyC5BCjT8LXzyO_G2mA&ui=fe42260f-cfc8-4bc3-b579-b299f79b65e6-tuct89d0800&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHdhdGVyMDY4OICcjuoGQIjrCkitkBBQ6dLYA1j___________8BYwjXFhDVHxgjZGMI0gMQ4AYYCGRjCJYUEJscGBhkYwi1FBDCHBgJZGMI9BQQnh0YH2R4AYABAogBvNOtxAE"
                },
                {
                    type: "video",
                    name: "Ιδιοκτήτης Ακινήτου - Αναθέστε το Aκίνητό σας | Blueground",
                    created: "Mon, 11 Feb 2019 06:57:52 UTC",
                    branding: "Blueground.com",
                    duration: 0,
                    views: 0,
                    thumbnail: [
                        {
                            url: "http://images.tab4oola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fc4318b747dc17fdca80c6efe2e908579.jpg",
                            width: "600",
                            height: "500"
                        }
                    ],
                    categories: ["el"],
                    id: "~~V1~~-4476595dfh9409232999360~~yNkb6cssuH8e8tVR7LClv3sZi9yjv8_eIqEYhD7NB6o9ZEj1nSOh25J82sTDXEn1oWs157JoiAAXIKi9-eLaKG3GM7Q_aWDX9O8A-oTuarjB3pAXD2426g4yuaugyXYaN63gxaKde9rsWPArupdiqgPEfFLTNctf0R_0ZK-0Ze6y-JUiDYCso9yz7zNzT5vpZVO9vYXRmElxEZe4W_VJZFXBxSi4SkUpDAEwkvZ0xiObkt4RUF7qo5n_0RGv9kLOjrOGv-6iDoYLvQ6osB3pEQ",
                    origin: "sponsored",
                    url: "http://api.taboola.com/1.0/json/taboola-templates/recommendations.notify-click?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&response.id=__ff0153dc0007b3d0c323f2712d04dfb1__dd6d437e43d856a93932a2a2cca7fe33&response.session=v2_09683dadb8bceeaa10da81123dd7fad8_fe42260f-cfc8-4bc3-b579-b299f79b65e6-tuct89d0800_1638105728_1638105728_CNawjgYQswsYtYzXtdYvIAEoATBmOIjrCkCtkBBI6dLYA1D___________8BWABgAGiQmMHcuKuioghwAQ&item.id=%7E%7EV1%7E%7E-4476599409232999360%7E%7EyNkb6cssuH8e8tVR7LClv3sZi9yjv8_eIqEYhD7NB6o9ZEj1nSOh25J82sTDXEn1oWs157JoiAAXIKi9-eLaKG3GM7Q_aWDX9O8A-oTuarjB3pAXD2426g4yuaugyXYaN63gxaKde9rsWPArupdiqgPEfFLTNctf0R_0ZK-0Ze6y-JUiDYCso9yz7zNzT5vpZVO9vYXRmElxEZe4W_VJZFXBxSi4SkUpDAEwkvZ0xiObkt4RUF7qo5n_0RGv9kLOjrOGv-6iDoYLvQ6osB3pEQ&item.type=video&sig=5ed1d5ce91a314d9086534694a06f71cef7daec9489e&redir=https%3A%2F%2Ftry.theblueground.com%2Fathens-property-owners%2F%3Futm_campaign%3Donboarding-ath%26utm_medium%3Drefferal%26utm_source%3Dtaboola%26utm_content%3Dunb%26utm_source%3Dtaboola%26utm_medium%3Dreferral%26tblci%3DGiAY72HqmZ8RjPENYQ6x9_xSgrrG662Rqkobsj6p2TdKDyC5BCjT8LXzyO_G2mA%23tblciGiAY72HqmZ8RjPENYQ6x9_xSgrrG662Rqkobsj6p2TdKDyC5BCjT8LXzyO_G2mA&ui=fe42260f-cfc8-4bc3-b579-b299f79b65e6-tuct89d0800&cpb=GIkFIJz__________wEqFnRhYm9vbGFzeW5kaWNhdGlvbi5jb20yCHdhdGVyMDY4OICcjuoGQIjrCkitkBBQ6dLYA1j___________8BYwjXFhDVHxgjZGMI0gMQ4AYYCGRjCJYUEJscGBhkYwi1FBDCHBgJZGMI9BQQnh0YH2R4AYABAogBvNOtxAE"
                }
            ]
        }
    }

    beforeEach(() => {
        getWidgets = jest.fn()
        document.body.innerHTML = `
        <div class="error-container"></div>
        <section class="widget-container"></section>
        `
    });

    test('When receiving 2 widgets, container should have two children', () => {
        getWidgets.mockResolvedValue(response)
        return getWidgets().then(res => {
            renderWidgets(res)
            expect(document.querySelectorAll('.widget-container .widget').length).toBe(2)
        })
    })

    test('When receiving bad response, renderWidgets should print error', () => {
        const errorTxt = 'Had issues...'
        getWidgets.mockResolvedValue({ err: errorTxt })
        return getWidgets().then((res) => {
            renderWidgets(res)
            expect(document.querySelector('.error-container').innerText).toBe('[ERROR] - Had error while fetching data:\n' + errorTxt)
        })
    })

    test('When receiving bad response, container should be empty', () => {
        const errorTxt = 'Had issues...'
        getWidgets.mockResolvedValue({ err: errorTxt })
        return getWidgets().then((res) => {
            renderWidgets(res)
            expect(document.querySelectorAll('.widget-container .widget').length).toBe(0)
        })
    })

    test('When receiving bad img url, renderWidget should place deafault image src', () => {
        //second widget on object has broken url
        getWidgets.mockResolvedValue(badResponse)
        return getWidgets((res) => {
            renderWidgets(res)
            //check second element img src
            expect(document.querySelectorAll('.widget-container .widget')[1].prop('src')).toBe('./imgs/favicon.ico')
        })
    })

})