import { expect } from 'chai';
import superTest from 'supertest';

const endpoint = superTest('http://localhost:3001/');

describe('Test api', () => {
    it('response with code 200 and word is not palindrome', async () => {
        const response = await endpoint.get('iecho?text="hola"').then(response => response)

        expect(response.status, 'successfull').to.equal(200)
        expect(JSON.stringify(response.body)).to.equal(JSON.stringify({ text: 'aloh', palindrome: false }))
    })

    it('response with code 200 and word is palindrome', async () => {
        const response = await endpoint.get('iecho?text="Ana lava lana"').then(response => response)

        expect(response.status, 'successfull').to.equal(200)
        expect(JSON.stringify(response.body)).to.equal(JSON.stringify({ text: 'anal aval anA', palindrome: true }))
    })

    it('response with code 400 when text is empty', async () => {
        const response = await endpoint.get('iecho?text=""').then(response => response)

        expect(response.status, 'successfull').to.equal(400)
        expect(JSON.stringify(response.body)).to.equal(JSON.stringify({ error:'no text' }))
    })


})