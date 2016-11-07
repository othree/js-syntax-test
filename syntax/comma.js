it('[WORD] a b c ...', () => {
    let a = 2;
    expect(a).to.equal(2);
});

describe('[foobartest]', () => {
    describe('test a route', () => {
        it('[CLIENT] should work', () => {
            let data = buildValidData();
            return data.save()
                .then(() => {
                    return request('put', `${data.pid}`)
                        .expect(200)
                        .expect(function (res) {
                            expect(res.body)
                                .to.be.an('object');
                        })
                });
        });
    })
});

