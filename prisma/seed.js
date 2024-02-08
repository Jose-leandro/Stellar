'use strict';
const __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
 result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const __generator = (this && this.__generator) || function(thisArg, body) {
  let _ = {label: 0, sent: function() {
    if (t[0] & 1) throw t[1]; return t[1];
  }, trys: [], ops: []}; let f; let y; let t; let g;
  return g = {'next': verb(0), 'throw': verb(1), 'return': verb(2)}, typeof Symbol === 'function' && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (g && (g = 0, op[0] && (_ = 0)), _) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0: case 1: t = op; break;
          case 4: _.label++; return {value: op[1], done: false};
          case 5: _.label++; y = op[1]; op = [0]; continue;
          case 7: op = _.ops.pop(); _.trys.pop(); continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0; continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1]; break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1]; t = op; break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2]; _.ops.push(op); break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e]; y = 0;
      } finally {
        f = t = 0;
      }
    }
    if (op[0] & 5) throw op[1]; return {value: op[0] ? op[1] : void 0, done: true};
  }
};
Object.defineProperty(exports, '__esModule', {value: true});
const client_1 = require('@prisma/client');
const prisma = new client_1.PrismaClient();
function main() {
  return __awaiter(this, void 0, void 0, function() {
    let refratoresData; let _i; let refratoresData_1; let refrator; let e_1;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 6, 7, 9]);
          return [4 /* yield*/, prisma.refratores.deleteMany()];
        case 1:
          _a.sent();
          refratoresData = [
            {
              nome_refrator: 'Refrator branco',
              preco: 'R$ 800',
              img_url: '/img/refrator-terceiro.png'.trim(),
            },
            {
              nome_refrator: 'Refrator preto',
              preco: 'R$ 500',
              img_url: '/img/refrator-preto.png'.trim(),
            },
            {
              nome_refrator: 'Refrator dourado',
              preco: 'R$ 700',
              img_url: '/img/refrator-dourado.png'.trim(),
            },
            {
              nome_refrator: 'Refrator marrom',
              preco: 'R$ 550',
              img_url: '/img/refrator-terceiro.png'.trim(),
            },
          ];
          _i = 0, refratoresData_1 = refratoresData;
          _a.label = 2;
        case 2:
          if (!(_i < refratoresData_1.length)) return [3 /* break*/, 5];
          refrator = refratoresData_1[_i];
          return [4 /* yield*/, prisma.refratores.create({
            data: refrator,
          })];
        case 3:
          _a.sent();
          _a.label = 4;
        case 4:
          _i++;
          return [3 /* break*/, 2];
        case 5:
          console.log('Script executado com sucesso!');
          return [3 /* break*/, 9];
        case 6:
          e_1 = _a.sent();
          console.error(e_1);
          return [3 /* break*/, 9];
        case 7: return [4 /* yield*/, prisma.$disconnect()];
        case 8:
          _a.sent();
          return [7];
        case 9: return [2];
      }
    });
  });
}
main();
