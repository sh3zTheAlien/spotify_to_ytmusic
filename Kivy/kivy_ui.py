from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.gridlayout import GridLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
from kivy.uix.widget import Widget
from kivy.properties import ObjectProperty

#in ,kv file the right side names are for the Python code and and the left side are for Kivy


class MyGrid(Widget): #this is the root widget
    name = ObjectProperty(None)
    email = ObjectProperty(None)

    def btn(self):
        print(f"Name: {self.name.text}\nEmail:{self.email.text}")
        self.name.text = ""
        self.email.text = ""

class MyApp(App):
    def build(self):
        return MyGrid()

if __name__ == "__main__":
    MyApp().run()