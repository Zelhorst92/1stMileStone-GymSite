# Testing & Bugs

- [Testing](#testing)
  * [Navigation](#navigation)
  * [Responsiveness](#responsiveness)
  * [Sign-up Form](#sign-up-form)
- [Bugs](#bugs-3)
  * [Dropdown Menu](#dropdown-menu)
  * [Sectionheadings](#sectionheadings)
  * [Responsiveness Subscription Section](#responsiveness-subscription-section)
  * [Responsiveness Form container](#responsiveness-form-container)
  * [Sign-up Form](#sign-up-form-1)
  * [Visibility Form Filled in content](#visibility-form-filled-in-content)
  * [Form phonenumber field](#form-phonenumber-field)

# Testing

## Navigation

*   ### Intention
    *   A navigationbar that stays on the top of the screen with the user at all times so the user can find the content the user wants quickly and navigate through the website without scrolling if the user wished it so. 
        *   When the screen is smaller, the navigationbar should change to the menu 'burger' button and have a drop down menu when clicked.
    *   Buttons should link to the appropriate sections of the website.
    *   Social media Icons should link to the appropriate website where they stand for and open in a new tab, safely.

*   ### Test
    *   All the links in the navigationbar will be tested if they link to the relevant sections of the website. 
        *   Also on smaller screens when the navigationbar changes to a dropdown menu.
    *   All the buttons will be tested if they link to the appropriate section of the website.
    *   All the social media icons will be tested if they link to the appropriate social media site.

*   ### Result
    *   All links in the navigationbar and buttons go to the appropriate sections of the website.
    *   The dropdown menu will appear if the screen width is smaller then 992px, as intented. 
    *   In the dropdown menu all links work as intented.
    *   On smaller screens, such as a mobile phone, the  the navigation dropdown menu covers half of the screen.
    *   Sectionheaders are not visible when using the navigation bar; they are hidden behind the navigation bar.

*   ### Bugs
    *   ~~Dropdown menu covers half the screen on smaller screen devices.~~
    *   ~~Sectionheaders are not visible on first glance when user navigates the website with the navigation bar.~~

*   ### Comments
    *   In current form, there is no login functionality, therefore that link goes back to the top.
    *   In current form, there is no dedicated gallery page, therefore that link goes back to the top.

## Responsiveness

*   ### Intention
    *   The site should be viewable on all standard device screen sizes and should move elements to fit the screen size.
   
*   ### Test
    *   The site will be looked at via the inspection tool of Google Chrome, Mozilla Firefox and Microsoft Edge in a responsive manner and via the integrated viewports: iPhone 5 SE, iPhone 6/7/8, Nexus 5X, Nexus 10, iPad pro and on a 1080p desktop monitor.
    *   Every section will be looked at seperately.
    *   The site will be looked at via a Sony XZ smart phone.
    
*   ### Result
    *   In the subscription section, the third subscription card does not center on medium width devices.
    *   In the form section, the form jumbotron extends into the subscription section when the width of the screen is over 576px but the height is below 636px.
    *   The rest of the website behaves as expected per bootstrap layout grid.

*   ### Bugs
    *   ~~The 'subscription cards' in the subscription section, do not center as intended.~~
    *   The form jumbotron extends into the subscription section when width is greater than 576px and height smallen than 636px.

*   ### Comments
    *   None.

## Sign-up Form

*   ### Intention
    *   The sign-up form should recognize when one field or option is not filled in and if that is the case, not submit.
    *   The sign-up form should when all fields and options are filled in, submit to a Code Institute 'correctly submitted form checker' site.
   
*   ### Test
    *   The form will be submitted without any content filled in.
    *   The form will be submitted with some fields or one not filled in, for all fields and options.
    *   The form will be subbmitted when all fields are filled in.
    *   The fields will be tested on correct information in the appropriate field.
    
*   ### Result
    *   When the form had no content filled, it would not submit.
    *   When the form had only one empty field, it would submit without the email and phone number.
    *   When all fields were filled in, with the correct data, it would submit and show the Code Institute 'correctly submitted form checker' site.

*   ### Bugs
    *   ~~The form should not submit without a phonenumber and emailaddress present in the form.~~
    *   ~~The phonenumberfield can contain any number between 0 and infinity.~~

*   ### Comments
    *   The submitted result does not need to be opened in a new tab, as the goal of signing up has been achieved. There is no necessity that user stays on the website.
    *   Ofcourse, instead of going to the website of the Code Institute, there should be a modal in place to say to tell the user that the form has been submitted correctly. See future features.

[Back to top](#top)

---

# Bugs

## Dropdown Menu

*   ### Bug
    *   Dropdown menu covers half the screen on smaller size screen.
   
*   ### Fix
    *   Adding a piece of javascript to make the the dropdown menu collapse back again so the user can see where he/she is on the page.
    
*   ### Result
    *   Navigation drop down menu now collapses back upon click.

*   ### Status
    *   Resolved

## Sectionheadings

*   ### Bug
    *   Sectionheadings are hidden behind the navigation bar when jumping to certian sections with the navigation bar.
   
*   ### Fix
    *   Add a new class of .section-nav to the appropriate sections and introducte a 'scroll-margin-top:' property to it.

*   ### Result
    *   Section headings are now visible when navigating throught the site with the navigation links.

*   ### Status
    *   Resolved

## Responsiveness Subscription Section
*   ### Bug
    *   The third subscription card is not aligned in the center when on medium width screen sizes.
   
*   ### Fix
    *   Add the 'justify-content-center' class to the div which also contains the 'row' class in the subscription section.
    
*   ### Result
    *   The third card is now aligned in the center on medium width screen sizes.

*   ### Status
    *   Resolved

## Responsiveness Form container
*   ### Bug
    *   The form jumbotron extends into the subscription section when width is greater than 576px and height smallen than 636px.
   
*   ### Fix
    *   
    
*   ### Result
    *   

*   ### Status
    *   Unresolved

## Sign-up Form
*   ### Bug
    *   The form submits without a phonenumber and emailaddress present in the form.
   
*   ### Fix
    *   Add 'required' to the appropriate input within the form.
    
*   ### Result
    *   The form now requires all fields to be filled in with the appropriate content.

*   ### Status
    *   Resolved

## Visibility Form Filled in content
*   ### Bug
    *   When filling in the sign-up form, the filled in content is in a black color, which does combine well with the background and is therefore not particular readable.
   
*   ### Fix
    *   Transparency of the form jumbotron could be made less.
    *   The color of the filled in content in the input should be #E74F0D (Flame Orange).
    
*   ### Result
    *   Color of the filled in content in the input has been changed to #E74F0D (Flame Orange).
    *   The transparency of the form jumbotron has been reduced.

*   ### Status
    *   Resolved

## Form phonenumber field
*   ### Bug
    *   The phonenumberfield can contain any number between 0 and infinity.

*   ### Fix
    *   Change input type to tel and give it a pattern value of 8 to 10 character of only numbers.

*   ### Result
    *   Only numbers between 8 to 10 digits can now be submitted.

*   ### Status
    *   Resolved

[Back to top](#top)