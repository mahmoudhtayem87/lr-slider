# Liferay Slider Remote App - Decoupled UI and Data to supports Low code / No code
 
This project has been created to show an example of a complex web component which accepts slots to pass content and configuration, This will allow you to decouple content from remote app, using this approach you will be able to pass the images to the slider using asset publisher / collection display widget or even with simple image component using the drag and drop feature in the page editor.
An Example component HTML  Structure is the following:
```
  <lr-mixed-slider>
    <config infinite="true"
            imagePopup="true"
            animationSpeed="1"
            slideImage="1"
            imageSizeWidth="500px"
            imageSizeHeight="300px"
            imageSizeSpace="10"
            manageImageRatio="true"
            showArrow="false"
            direction="auto"
            autoSlideInterval = "2"
            autoSlideStopOnHover = "true">
    </config>
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="">
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="">
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="">
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="">
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="">
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="">

  </lr-mixed-slider>
```
Inorder to use LR Slider please do the following:
1. Navigate to Global Menu -> Remote Apps
2. Click on add JS
3. Provide LRSlider built JS URL "Hosted on Liferay or on a remote server"
4. Navigate to Pages Configuration -> Advanced
5. Add JavaScript Client Extension and Select LRSlider
6. Create A new Fragment and add the Element Tag

Example Fragment Code:

```aidl
<div>
    [#assign isEdit=layoutMode == "edit"]
    <div>
        [#if !isEdit]
        <lr-mixed-slider>
            <config infinite="${configuration.infinite?string}" imagePopup="${configuration.imagePopup?string}"
                animationSpeed="${configuration.animationSpeed?string}" slideImage="${configuration.slideImage?string}"
                imageSizeWidth="${configuration.imageSizeWidth?string}"
                imageSizeHeight="${configuration.imageSizeHeight?string}"
                imageSizeSpace="${configuration.imageSizeSpace?string}"
                manageImageRatio="${configuration.manageImageRatio?string}"
                showArrow="${configuration.showArrow?string}" direction="${configuration.direction?string}"
                autoSlideInterval="${configuration.autoSlideInterval?string}"
                autoSlideStopOnHover="${configuration.autoSlideStopOnHover?string}"></config>
            [/#if]
            <lfr-drop-zone>
            </lfr-drop-zone>
            [#if !isEdit]
        </lr-mixed-slider>
        [/#if]
    </div>
</div>
```
Example Fragment - Configuration JSON Code:
```aidl
{
    "fieldSets": [
        {
            "fields": [
                {
                    "name": "infinite",
                    "label": "Infinite Sliding Loop",
                    "type": "checkbox",
                    "defaultValue": false
                },
                {
                    "name": "imagePopup",
                    "label": "Image Popup",
                    "type": "checkbox",
                    "defaultValue": true
                },
                {
                    "name": "animationSpeed",
                    "label": "Animation Speed",
                    "type": "text",
                    "typeOptions": {
                        "placeholder": "1"
                    },
                    "dataType": "string",
                    "defaultValue": "1"
                },
                {
                    "name": "slideImage",
                    "label": "Number of images to be slide",
                    "type": "text",
                    "typeOptions": {
                        "placeholder": "1"
                    },
                    "dataType": "string",
                    "defaultValue": "1"
                },
                {
                    "name": "imageSizeWidth",
                    "label": "Image Size - Width",
                    "type": "text",
                    "typeOptions": {
                        "placeholder": "400px"
                    },
                    "dataType": "string",
                    "defaultValue": "400px"
                },
                {
                    "name": "imageSizeHeight",
                    "label": "Image Size - Height",
                    "type": "text",
                    "typeOptions": {
                        "placeholder": "400px"
                    },
                    "dataType": "string",
                    "defaultValue": "400px"
                },
                {
                    "name": "imageSizeSpace",
                    "label": "Space between images",
                    "type": "text",
                    "typeOptions": {
                        "placeholder": "10"
                    },
                    "dataType": "string",
                    "defaultValue": "10"
                },
                {
                    "name": "manageImageRatio",
                    "label": "Manage image ratio",
                    "type": "checkbox",
                    "defaultValue": false
                },
                {
                    "name": "showArrow",
                    "label": "Show Arrow",
                    "type": "checkbox",
                    "defaultValue": true
                },
                {
                    "name": "direction",
                    "label": "Direction",
                    "type": "text",
                    "typeOptions": {
                        "placeholder": "auto"
                    },
                    "dataType": "string",
                    "defaultValue": "auto"
                },
                {
                    "name": "autoSlideInterval",
                    "label": "Auto slide interval",
                    "type": "text",
                    "typeOptions": {
                        "placeholder": "1"
                    },
                    "dataType": "string",
                    "defaultValue": "1"
                },
                {
                    "name": "autoSlideStopOnHover",
                    "label": "Auto slide stop on hover",
                    "type": "checkbox",
                    "defaultValue": true
                }
                
            ]
        }
    ]
}
```
