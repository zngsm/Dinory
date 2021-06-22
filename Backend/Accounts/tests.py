from django.test import TestCase
from .models import User

# python manage.py test
# Create your tests here.
# class AccountTest(TestCase):
    # setup run before run 
    # def setUp(self):
    #     User.objects.create_user(username="testuser", password="password")
    
    # # clean up after run every test method
    # def tearDown(self):
    #     pass

    # def test_user_model_create(self):
    #     user = User.objects.get(pk=1)
    #     self.assertEqual(user.username, 'testuser')

    # def test_user_pin_code_max_length(self):
    #     user = User.objects.get(pk=1)
    #     max_length = user._meta.get_field('pin_code').max_length
    #     self.assertEqual(max_length, 255)
    # def test_signup(self):
    #     ex_data = {
    #         'username': 'TestUser',
    #         'password': '1234',
    #         'password_confirmation': '123456Aa',
    #         'pin_code': '000000',
    #         'pin_code_confirmation': '00000',
    #         'email': 'popop@naver.com'
    #     }
    #     response = self.client.post('/api/accounts/signup/', ex_data)
    #     print(response.data)