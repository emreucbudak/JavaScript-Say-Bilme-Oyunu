let sayi = prompt("Sayıyı Tahmin et = ");
let zaman = new Date();
let c;
c = zaman.getMilliseconds() - sayi;
if (sayi == zaman.getMilliseconds()) {
    document.writeln("Doğru Bildiniz!");
}
else {
    document.writeln("Yanlış Bildiniz doğru sayıdan şu kadar uzaklıktasınız  = " + c + "<br>");
    document.writeln("Doğru Sayı = " + zaman.getMilliseconds());
}