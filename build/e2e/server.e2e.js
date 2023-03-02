"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
describe('e2e', () => {
    let server;
    beforeAll(() => {
        server = new server_1.App();
    });
    it('sss', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch('http://localhost:3000');
        const da = yield res.json();
        const poo = yield server.close();
        console.log(2323, poo);
        expect(da).toBe(234);
    }));
    // it('sss', async () => {
    //   const res = await fetch('http://localhost:3000');
    //   const da = await res.json();
    //   expect(da).toBe(234);
    // });
});
