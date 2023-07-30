import axios from 'axios';

function follow(url, cb) {
    axios.get(url)
        .then(response => {
            const data = response.data;
            if (!data || !data.follow) {
                cb(data);
                return;
            }
            follow(data.follow.replace('challenge?', 'challenge.json?'), cb);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

follow('http://www.letsrevolutionizetesting.com/challenge.json', function (data) {
    console.log(data.message);
});