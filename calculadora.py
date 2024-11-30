def calculadora():
    print("......calculadora basica de cuatro operaciones......\n")
numero1 = float(input("ingrese el primer numero:"))
numero2= float(input("ingrese el segundo numero:"))
numero3 = float(input("ingrese el tercer numero:"))

#menu de seleccion
opcion =print("\n....seleccione que operacion desea realizar...\n")
print("1. sumar")
print("2. restar")
print("3. multiplicar")
print("4. dividir")

if opcion =='1':
    resultado = numero1+numero2+numero3
    print(f"la suma de {numero1},{numero2} y {numero3} es:{resultado}")

calculadora()