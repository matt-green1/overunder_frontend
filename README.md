# Over/Under

## Description
Over/Under is a trivia app featuring themed games that involve guessing if a numerical answer is above or below a provided number. Users can create an account, customize their profile, and track their average score over time against other users via a leaderboard. 

## Demo
You can watch video demo <a href="https://www.youtube.com/watch?v=JCH6onb_iUg&ab_channel=MatthewGreen">here</a>.

## Prerequisites
React, Rails, PostgreSQL, npm.

## Libraries 
- [Semantic UI] (https://react.semantic-ui.com/)
- [React Sky](https://github.com/lucagez/sky)


## Installation Instructions

1. Fork and clone <a href="https://github.com/matt-green1/overunder_backend">back end repo</a>.

2. Set up back end. In terminal, enter:

```
cd overunder_backend
bundle install
rails db:create
rails db:migrate
rails db:seed
rails s
```
3. Fork and clone this (front end) repo.

4. Set up front end. Open another terminal tab and enter:

```
cd overunder_frontend
npm or yarn start

```

## License

MIT License

Copyright (c) [2020]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
