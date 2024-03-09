This site was coded using the Next.js framework, along with TailwindCSS as a utility css framework. I have also included some basic scss/css in the globals.css file to show that I can write basic scss/css if needed.

## Getting Started

Clone repository

```bash

git clone git@github.com:dnaluz/idea-theorem.git

```

Install dependencies, from the project root directory

```bash

npm install

# or

yarn install

```

Run the development server locally

```bash

npm run dev

# or

yarn dev


```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. If you would like to see the application live online I have deployed it to Vercel here [https://idea-theorem.vercel.app/](https://idea-theorem.vercel.app/)

## Good to know

I have taken some assumptions when creating the different components.

1. The `AlertMessage` component didn't seem to have any way to close / hide itself once it appears. In this case I have added a prop named `autoHideAlert` to the `CreateUserAccountForm` component. Providing a true value to this prop will automatically hide the `AlertMessage` component after 3 seconds. Additionally there is a autoHideDelay prop where you can control how long the delay before the component hides itself.

2. The birthday component automatically changes how many days a selectable when you change the month / year. Originally I had the days selection box empty but found that UX a little bit confusing so I had defaulted the month to January and the year to the current year just so some days populate the selection box. From a UX standpoint changing the order and hiding the days selection input would be a more streamlined experience, but in favour of sticking with the designs in figma I decided against it as per the requirements.

3. A few assumptions were made with regards to how the responsiveness of the page works, in an ideal world I am in close contact with the UX/Designer and we figure out the most ideal way to handle how the different components react to screen size change.
