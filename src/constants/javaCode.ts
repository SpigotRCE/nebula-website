function dedent(code: string): string {
  const lines: string[] = code.trimStart().split("\n");
  let minIndent: number = Number.MAX_SAFE_INTEGER;

  for (const line of lines) {
    if (!line.trim()) continue;
    const match = line.match(/^(\s+)/);
    if (match) {
      const indentSize = match[1].length;
      if (indentSize < minIndent) {
        minIndent = indentSize;
      }
    } else {
      minIndent = 0;
    }
  }

  if (minIndent === Number.MAX_SAFE_INTEGER) {
    minIndent = 0;
  }

  return lines
    .map(line => (line.startsWith(" ".repeat(minIndent)) ? line.slice(minIndent) : line))
    .join("\n");
}

export const originalCode: string = dedent(`
@Override
public void keyPressed(KeyEvent e) {
    switch (e.getKeyCode()) {
        case 39: {
            if (ThreadsController.directionSnake == 2) break;
            ThreadsController.directionSnake = 1;
            break;
        }
        case 38: {
            if (ThreadsController.directionSnake == 4) break;
            ThreadsController.directionSnake = 3;
            break;
        }
        case 37: {
            if (ThreadsController.directionSnake == 1) break;
            ThreadsController.directionSnake = 2;
            break;
        }
        case 40: {
            if (ThreadsController.directionSnake == 3) break;
            ThreadsController.directionSnake = 4;
            break;
        }
    }
}`);

export const obfuscatedCode: String = dedent(`
/*
 * Unable to fully structure code
 * Enabled aggressive block sorting
 * Enabled unnecessary exception pruning
 * Enabled aggressive exception aggregation
 */
@Override
public void keyPressed(KeyEvent var1_1) {
    block52: {
        var3_2 = Integer.rotateLeft(906901251, Listener.x & 31) ^ Listener.x ^ -2037296588;
        var2_3 = Listener.ai("\\\u0112\\\u010e", (Integer)-423544662, (Object)var1_1);
        if (var2_3 == (var3_2 * 678191269 ^ 1559234362 ^ Listener.ai("\\\u0112\\\u0110", (Integer)-423544661))) break block52;
        var5_5 = -63711936;
        var4_4 = 836732755 ^ (var3_2 | var5_5);
        ** GOTO lbl14
    }
    var5_5 = -1865190444;
    var4_4 = 177482461 ^ (var3_2 | var5_5);
    if (true) ** GOTO lbl14
    block44: while (true) {
        var5_5 = -708937085;
        var4_4 = -215926586 ^ (var3_2 | var5_5);
lbl14:
            // 3 sources

            block45: while (true) {
                switch (var4_4 ^ (var3_2 | var5_5) ^ 1225838844) {
                    case 419305844: {
                        var3_2 = var3_2 * (Listener.z | 1) - 1523762166;
                        var5_5 = -1169457529;
                        var4_4 = 186724624 ^ (var3_2 | var5_5);
                        continue block45;
                    }
                    case 1110565356: {
                        if (var2_3 != (var3_2 * -480658731 ^ 129675184 ^ Listener.ai("\\\u0112\\\u010d", (Integer)-423544664))) {
                            var5_5 = 1814864284;
                            var4_4 = -1332280355 ^ (var3_2 | var5_5);
                            continue block45;
                        }
                        ** GOTO lbl127
                    }
                    case 2026854319: {
                        var5_5 = 623734709;
                        var4_4 = 1374603656 ^ (var3_2 | var5_5);
                        continue block45;
                    }
                    case -648644888: {
                        ** GOTO lbl99
                    }
                    case 926720391: {
                        var5_5 = -2102634060;
                        var4_4 = -713184781 ^ (var3_2 | var5_5);
                        continue block45;
                    }
                    case -1670547185: {
                        var3_2 = (Integer.rotateLeft(var3_2, Listener.x & 31) ^ Listener.x) - -1051717922;
                        var5_5 = 601541951;
                        var4_4 = -1874418156 ^ (var3_2 | var5_5);
                        continue block45;
                    }
                    case -237565804: {
                        var5_5 = -1529710520;
                        var4_4 = -1685885930 ^ (var3_2 | var5_5);
                        continue block45;
                    }
                    case -1171134406: {
                        var3_2 = var3_2 + Listener.x ^ 941008843;
                        var5_5 = -1786721640;
                        var4_4 = 1524934684 ^ (var3_2 | var5_5);
                        continue block45;
                    }
                    case -762069782: {
                        Listener.ai("\\\u0111\\\u010a", (Integer)-423544646, (int)(var3_2 * 44103127 ^ -978410806 ^ Listener.ai("\\\u0112\\\u010a", (Integer)-423544667)));
                        ** GOTO lbl-1000
                    }
                    case 334788832: {
                        if (Listener.ai("\\\u0111\\\u0110", (Integer)-423544645) != (var3_2 * -912954917 ^ 1465517840 ^ Listener.ai("\\\u0111\\\u010d", (Integer)-423544648))) {
                            ** break;
                        }
                        ** GOTO lbl-1000
                    }
                    case -602438770: {
                        var5_5 = 1745742520;
                        var4_4 = -1194862488 ^ (var3_2 | var5_5);
                        continue block45;
                    }
                    case 126358912: {
                        if (var2_3 != (var3_2 * -268641731 ^ 1196780870 ^ Listener.ai("\\\u0112\\\u010e", (Integer)-423544663))) {
                            var5_5 = -1953864475;
                            var4_4 = 2116841851 ^ (var3_2 | var5_5);
                            continue block45;
                        }
                        ** GOTO lbl167
                    }
                    case -108539103: {
                        var5_5 = -1800570267;
                        var4_4 = 1290638623 ^ (var3_2 | var5_5);
                        continue block45;
                    }
                    case 100484579: {
                        var3_2 = var3_2 * (Listener.y | 1) + 667575052;
                        var5_5 = -1286248062;
                        var4_4 = 1318634876 ^ (var3_2 | var5_5);
                        continue block45;
                    }
lbl77:
                    // 1 sources

                    var5_5 = 787895416;
                    var4_4 = -811246578 ^ (var3_2 | var5_5);
                    break;
                    case 2111151047: {
                        ** break;
                    }
                    case -2034922254: {
                        var5_5 = 358876939;
                        var4_4 = 885345083 ^ (var3_2 | var5_5);
                        continue block45;
                    }
                    case 535206493: {
                        var3_2 = var3_2 + Listener.y ^ -1046802980;
                        var5_5 = 1590523237;
                        var4_4 = 414836950 ^ (var3_2 | var5_5);
                        break;
                    }
                    case 1953724665: {
                        Listener.ai("\\\u0111\\\u0106", (Integer)-423544642, (int)(var3_2 * -4112157 ^ -1798012263 ^ Listener.ai("\\\u0111\\\u010e", (Integer)-423544647)));
                        ** GOTO lbl-1000
                    }
lbl94:
                    // 1 sources

                    var5_5 = -146487481;
                    var4_4 = 1029941253 ^ (var3_2 | var5_5);
                    continue block45;
                    case 1370044458: {
                        return;
                    }
lbl99:
                // 1 sources

                if (var2_3 == (var3_2 * -2069613013 ^ -389102805 ^ Listener.ai("\\\u0112\\\u0113", (Integer)-423544658))) continue block44;
                var5_5 = 538831912;
                var4_4 = -1173357783 ^ (var3_2 | var5_5);
                continue block45;
                case 295403781: {
                    ** GOTO lbl124
                }
                case -1415050719: {
                    ** GOTO lbl116
                }
                case -1289636639: {
                    Listener.ai("\\\u0112\\\u010e", (Integer)-423544666, (int)(var3_2 * -2107177823 ^ 908467258 ^ Listener.ai("\\\u0112\\\u0106", (Integer)-423544671)));
                    ** GOTO lbl-1000
                }
                case -1736551612: {
                    if (Listener.ai("\\\u0112\\\u010c", (Integer)-423544665) != (var3_2 * 2048560335 ^ 776640017 ^ Listener.ai("\\\u0112\\\u0109", (Integer)-423544668))) {
                        var5_5 = -369711664;
                        var4_4 = -1794681998 ^ (var3_2 | var5_5);
                        continue block45;
                    }
                    ** GOTO lbl-1000
                }
lbl116:
                // 1 sources

                var5_5 = 51304573;
                var4_4 = 1485525497 ^ (var3_2 | var5_5);
                continue block45;
                case 1132788257: {
                    var3_2 = var3_2 * (Listener.w | 1) + 538441331;
                    var5_5 = -1696648390;
                    var4_4 = -781286472 ^ (var3_2 | var5_5);
                    continue block45;
                }
lbl124:
                // 1 sources

                var5_5 = -2092785957;
                var4_4 = -97426403 ^ (var3_2 | var5_5);
                continue block45;
lbl127:
                // 1 sources

                var5_5 = -644164754;
                var4_4 = 1286935427 ^ (var3_2 | var5_5);
                continue block45;
                case -1661609782: {
                    Listener.ai("\\\u0112\\\u0112", (Integer)-423544670, (int)(var3_2 * 1742553813 ^ 1423767781 ^ Listener.ai("\\\u0112\\\u0112", (Integer)-423544659)));
                    ** GOTO lbl-1000
                }
                case 94749567: {
                    var3_2 = (var3_2 | Listener.x) - Listener.x + 775519482;
                    var5_5 = -592602617;
                    var4_4 = 1484900075 ^ (var3_2 | var5_5);
                    continue block45;
                }
                case 676009642: {
                    var5_5 = 341705743;
                    var4_4 = 102293912 ^ (var3_2 | var5_5);
                    continue block45;
                }
                case 294721047: {
                    if (Listener.ai("\\\u0112\\\u0108", (Integer)-423544669) != (var3_2 * -1479891537 ^ 608857471 ^ Listener.ai("\\\u0112\\\u0105", (Integer)-423544672))) {
                        var5_5 = -1016607259;
                        var4_4 = -491201827 ^ (var3_2 | var5_5);
                        continue block45;
                    }
                    ** GOTO lbl-1000
                }
                case 1325936996: {
                    var5_5 = -334379214;
                    var4_4 = -706410442 ^ (var3_2 | var5_5);
                    continue block45;
                }
                case 764797382: {
                    var3_2 = var3_2 * (Listener.y | 1) + 1113853642;
                    var5_5 = -1715553698;
                    var4_4 = -1746043082 ^ (var3_2 | var5_5);
                    break;
                }
                case 72429110: {
                    if (Listener.ai("\\\u0112\\\u0114", (Integer)-423544657) != (var3_2 * 937795327 ^ -427640039 ^ Listener.ai("\\\u0112\\\u0111", (Integer)-423544660))) {
                        var5_5 = -653697676;
                        var4_4 = 1633404502 ^ (var3_2 | var5_5);
                        continue block45;
                    }
                    ** GOTO lbl-1000
                }
                case -216060971: {
                    var5_5 = 130710858;
                    var4_4 = 1686450490 ^ (var3_2 | var5_5);
                    break;
                }
lbl167:
                   // 1 sources

                   var5_5 = 1478517870;
                   var4_4 = -719938730 ^ (var3_2 | var5_5);
                   continue block45;
                   case -1677309014: {
                       var3_2 = (var3_2 ^ Listener.z) - -1578430089;
                       var5_5 = -238502083;
                       var4_4 = 1296170698 ^ (var3_2 | var5_5);
                       break;
                   }
                   case -553799734: lbl-1000:
                   // 9 sources
                   {
                       var5_5 = 1564433215;
                       var4_4 = 1458981537 ^ (var3_2 | var5_5);
                   }
               }
           }
           break;
       }
   }`)

export const virtualizedCode: String = dedent(`
@Override
public void keyPressed(KeyEvent keyEvent) {
    Object[] objectArray = new Object[6];
    objectArray[0] = this;
    objectArray[1] = keyEvent;
    NebulaVirtualMachine.execute((Object[])$nvm$data[0], objectArray, MethodHandles.lookup());
    
/*
 * Unable to fully structure code
 * Enabled aggressive block sorting
 * Enabled unnecessary exception pruning
 * Enabled aggressive exception aggregation
 */
static {
    Listener.$nvm$data = NebulaVirtualMachine.loadClass(MethodHandles.lookup().lookupClass(), -328566867, "GvNIhzHio+j2X424BQCKs3H27WZ0/uThX5yBf8IJUiY=", "MD5", -1692364846, "FgZ2ue3bwF1IkTbLRS1PMX0D01iox4dU4VI6DIIkl6Q=", "SHA-256");
    NebulaVirtualMachine.registerVmMethod("keyPressed", "(Ljava/awt/event/KeyEvent;)V", (Object[])Listener.$nvm$data[0], MethodHandles.lookup(), 6);
    NebulaVirtualMachine.registerVmMethod("B", "(JJII)J", (Object[])Listener.$nvm$data[1], MethodHandles.lookup(), 12);
    NebulaVirtualMachine.registerVmMethod("C", "(JII)J", (Object[])Listener.$nvm$data[2], MethodHandles.lookup(), 10);
    NebulaVirtualMachine.registerVmMethod("D", "(JJII)I", (Object[])Listener.$nvm$data[3], MethodHandles.lookup(), 14);
    NebulaVirtualMachine.registerVmMethod("E", "(JJII)I", (Object[])Listener.$nvm$data[4], MethodHandles.lookup(), 14);
    NebulaVirtualMachine.registerVmMethod("F", "(JJII)I", (Object[])Listener.$nvm$data[5], MethodHandles.lookup(), 12);
    NebulaVirtualMachine.registerVmMethod("G", "(JJII)I", (Object[])Listener.$nvm$data[6], MethodHandles.lookup(), 12);
    var4 = "\\u00ea\\u0003\\u00b7\\u0095\\u001f\\u00f6\\u0013\\u00a1Fs\\u008aN>\\u00c2r\\u00b0\\u00f5\\u0005@b\\u0098\\u00a6\\u00059\\u00c1\\u0087\\u00f9\\u0087=\\u0010\\u00e5Q\\u0001\\u00d80\\u0098\\u00c8\\u00a3\\u0089\\u00b5\\u0001\\u00fc\\u008bx(A\\u00d0=4\\u0096\\u0094z\\u008b\\u00a0\\u00ba\\u00d4\\u00e0Bf\\u0005=\\u0082\\u00b7\\u00f4\\u0015\\u00f7\\u00dc\\u00cb\\u00b0\\u008fAM\\u0013\\u0097\\u00b4\\u0002\\u008b\\u00ee\\u00ff\\u00837K3\\u00ee\\u000bL \\u00b5\\u00ecgar\\u00aflw\\u00d2\\u00a2\\u0013!\\u00bf\\u00df\\u00db\\u00d9\\u0093\\u001a~\\u00a9C\\u0097\\n6Ju\\u008blcW\\u0012\\u00f31\\u0019\\u00fd5\\u00c0N\\u00d3\\u00987;VW\\u009e\\u00ba\\u00e9\\u00f2\\u0086\\u00ebu\\u00d7\\u0084af\\u009aV\\u00d2C2>\\u00c1X\\u001b\\u00da>\\u00c9\\u00fd\\u00a80\\u00d7h\\u00cd\\u0095\\u00e6\\u00a9}\\u00c7\\u00e2\\u00fd)|9|{\\u00b3\\u0012R<\\u0002\\u0085\\u0001\\u00d5\\u0096\\u0090z\\u0082Qc\\u0081\\u0016S\\r\\u0001:\\u00d2\\u0088\\u001b\\u0082\\u0097\\u00fc\\u00f8\\u00b2\\u00d5U\\u0093\\"_T\\u0086\\u00cdDY\\u007f\\u001e#\\u0083\\u00c3\\u00af\\u0004C.\\u009e\\u00c8m]\\u001d\\u008cI\\txr~)p\\u00a3\\u0002\\u00b2\\u00f0\\u00b7\\u0088\\u00bf\\u00daBiWgjN#g\\u00fcV\\u00e7w\\u007f\\u00b75\\u0014\\u00f3\\u00d4\\u0091\\u0017j3D\\u00b4\\u00a9\\u0001\\u0095B\\u0080s\\u0093\\u00959\\u0084\\u0082\\u00d8\\u0089\\u001c(\\u009b!W\\u008b\\b[>\\u00f5\\u0011\\u0096\\u00e9,XGx\\u0015x\\u00fb\\u00abB\\u00dbu\\u00e1\\u00c8\\u00c4\\u00dd\\u00c8\\u0095\\u00a6R0\\u00een/h\\u00d9;z\\u00d6\\u00b0\\u0092\\u00ca\\u0019\\u00fe\\u0092\\n\\u00e7\\u00a0CG\\u0014\\u00edM\\u008e\\u00f3\\u00ca\\u0002\\u00cc6\\u000f\\u00cb\\u00b4\\u008d\\u0004Z\\u00e1H\\u0091r\\u00c3\\u00e4\\u00b22B#&\\u00a2\\u00c766I\\u00de\\u00a0\\u00b63\\u000b&\\r\\u0003zl{\\u00f1\\u00e81\\u0082g:t\\u00b1\\u009d\\u001f^\\u00fd\\u0091\\u00e9\\u00bcN\\u0010\\u00a1h\\u0001r\\u0000waK\\u00d8l\\t6\\u0007\\u00d5(_h\\u00b6\\u00baP\\u008c\\u0001\\u0091\\u0085\\u001a\\u00b3\\u00bb'\\u0012\\u00ady\\u00d0\\u00a0\\u00b3\\f\\u00e0\\u00fe.\\u0090$\\u00c31\\u00a9y\\u00fc\\u00df\\u00e7\\u00a2\\u00ce]\\u00ff\\u00cc\\u009d\\u00cc\\u00bb\\u00e2\\u0096\\u00d4\\u00fb4\\u00d1".getBytes(StandardCharsets.ISO_8859_1);
    var20_1 = new byte[8];
    var21_2 = 8 - 1;
    while (true) {
        block22: {
            block21: {
                var23_3 = 871055540;
                break block22;
lbl15:
                    // 2 sources

                    while (true) {
                        var23_3 = 322887082;
                        break block21;
                        break;
                    }
                    while (true) {
                        var23_3 = -1409193846;
                        break block22;
                        break;
                    }
                }
                block18: while (true) {
                    block23: {
                        block24: {
                            switch (var23_3 ^ -81365873) {
                                case 1589648026: {
                                    ** break;
                                }
                                case -401037019: {
                                    if (var12_6 < var11_5) {
                                        var23_3 = -1511625195;
                                        continue block18;
                                    }
                                    var23_3 = 1367883759;
                                    break block23;
                                }
                                case 277279807: {
                                    var4[var12_6] = (byte)(var4[var12_6] ^ var4[var12_6 - 1]);
                                    break;
                                }
                                case -1431418016: {
                                    var5_14 = new GZIPInputStream(new ByteArrayInputStream(var4)).readAllBytes();
                                    var7_15 = new int[1];
                                    var6_16 = Listener.ak(var5_14, var7_15);
                                    Listener.R = var6_16;
                                    var8_17 = Listener.aj(var5_14, var7_15, StandardCharsets.UTF_8);
                                    Listener.S = var8_17;
                                    var9_18 = Listener.aj(var5_14, var7_15, StandardCharsets.UTF_8);
                                    Listener.T = var9_18;
                                    var10_19 = Listener.aj(var5_14, var7_15, StandardCharsets.ISO_8859_1);
                                    Listener.U = var10_19;
                                    Listener.V = new MethodHandle[var6_16.length / 3];
                                    Listener.W = 181039541;
                                    var2_21 = var0_20 = Listener.ad("a\\u011a\\u0113", (Integer)181039604, (Class)Listener.ad("a\\u011a\\u0113", (Integer)181039605, (Object)Listener.ad("a\\u0117\\u0115", (Integer)181039498)), (long)3752293024732794185L, (int)-226249189);
                                    var2_21 = Listener.ad("a\\u011a\\u0112", (Integer)181039607, (long)var0_20, (long)var2_21, (int)-2099799225, (int)-1826984313);
                                    var2_21 = Listener.ad("a\\u011a\\u0111", (Integer)181039606, (long)var2_21, -1996812289, (int)-349743943);
                                    Listener.ad("a\\u0119\\u011b", (Integer)181039601, (long)var2_21);
                                    Listener.ad("a\\u0119\\u0119", (Integer)181039603, (int)(Listener.ad("a\\u011a\\u010f", (Integer)181039600, (long)var0_20, (long)var2_21, (int)-1175696707, (int)-517213790) ^ -1220862963));
                                    Listener.ad("a\\u0119\\u010f", (Integer)181039613, (int)(Listener.ad("a\\u011a\\u010d", (Integer)181039602, (long)var0_20, (long)var2_21, (int)-1578258767, (int)-1327824473) ^ -1422522415));
                                    Listener.ad("a\\u0119\\u010d", (Integer)181039615, (int)(Listener.ad("a\\u011a\\u011b", (Integer)181039612, (long)var0_20, (long)var2_21, (int)-1197283374, (int)-1560831654) ^ 1598878376));
                                    Listener.ad("a\\u0119\\u0113", (Integer)181039609, (int)(Listener.ad("a\\u011a\\u0119", (Integer)181039614, (long)var0_20, (long)var2_21, (int)149699776, (int)-1427495255) ^ 1366716100));
                                    return;
                                }
                                case 1881496627: {
                                    var16_9 = var4[var12_6] & 255;
                                    var15_8 = var12_6 * 262813341 + -595199121 & 255;
                                    var17_10 = var15_8 & 7;
                                    var4[var12_6] = (byte)((var16_9 >>> var17_10 | var16_9 << 8 - var17_10) & 255);
                                    var14_7 = var12_6 % 128;
                                    var13_4 = Listener.al(var14_7, 181039541);
                                    var4[var12_6] = (byte)(var4[var12_6] & 255 ^ var13_4);
                                    ++var12_6;
                                    ** GOTO lbl15
                                }
lbl67:
                                // 1 sources

                                if (var12_6 != 0) break block24;
                            }
                            var23_3 = -1962727236;
                            break block23;
                        }
                        var23_3 = -341802832;
                    }
                }
            }
            block19: while (true) {
                switch (var23_3 ^ -2117923706) {
                    default: {
                        continue block19;
                    }
                    case -1305981902: {
                        if (var21_2 < 0) ** continue;
                        var23_3 = -1752881766;
                        continue block19;
                    }
                    case 767714316: {
                        var18_11 = Arrays.copyOfRange(var4, 0, 8);
                        var19_12 = Arrays.copyOfRange(var4, 8, var4.length);
                        var22_13 = Cipher.getInstance("DES/CFB/NoPadding");
                        var22_13.init(2, (Key)new SecretKeySpec(var20_1, "DES"), new IvParameterSpec(var18_11));
                        var4 = var22_13.doFinal(var19_12);
                        var11_5 = var4.length;
                        var12_6 = 0;
                        ** continue;
                    }
                    case 373696796: 
                }
                break;
            }
            var20_1[var21_2] = var13_4 = Listener.al(var21_2, 756980378);
            var21_2 += -1;
        }
    }
}
`)