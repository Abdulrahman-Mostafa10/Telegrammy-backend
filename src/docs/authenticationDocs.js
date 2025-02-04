/**
 * @swagger
 *  /auth/register:
 *    post:
 *      summary: Register a new user
 *      description: A novel user registers to the application.
 *      tags:
 *        - User Registration
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                  description: the username used in tha app
 *                email:
 *                  type: string
 *                  format: email
 *                password:
 *                  type: string
 *                passwordConfirm:
 *                  type: string
 *                phone:
 *                  type: string
 *              required:
 *                - username
 *                - email
 *                - password
 *                - passwordConfirm
 *                - phone
 *            example:
 *              username: test1
 *              email: ' test@example.com'
 *              password: password1234
 *              passwordConfirm: password1234
 *              phone: '010101010101'
 *      responses:
 *        '201':
 *          description: User registered successfully.
 *        '400':
 *          description: Bad request.
 */

/**
 * @swagger
 *  /auth/verify:
 *    post:
 *      summary: Verify user email
 *      description: >-
 *        Verifying the user by clicking on the verification link sent to their
 *        email.
 *      tags:
 *        - User Registration
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  format: email
 *                verificationCode:
 *                  type: string
 *              required:
 *                - email
 *                - verificationCode
 *            example:
 *              email: ' test@example.com'
 *              verificationCode: a1b457e#686@fd
 *      responses:
 *        '200':
 *          description: Email verified successfully.
 *        '400':
 *          description: Bad request.
 */

/**
 * @swagger
 *  /auth/resend-verification:
 *    post:
 *      summary: Resend verification link
 *      description: Resend the verification link to the user's email.
 *      tags:
 *        - User Registration
 *        - User Registration
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  format: email
 *                  example: test@example.com
 *              required:
 *                - email
 *      responses:
 *        '200':
 *          description: Verification link resent successfully.
 *        '400':
 *          description: Bad request.
 */

/**
 * @swagger
 *  /auth/login:
 *    post:
 *      summary: User login
 *      description: Logging the user into the system.
 *      tags:
 *        - User Login
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                UUID:
 *                  type: string
 *                  description: UUID is the email or username or phone number of the user
 *                password:
 *                  type: string
 *                  description: The password of the user
 *              required:
 *                - UUID
 *                - password
 *      responses:
 *        '200':
 *          description: User logged in successfully.
 *        '401':
 *          description: Unauthorized.
 */

/**
 * @swagger
 *  /auth/logout:
 *    post:
 *      summary: User logout
 *      description: Logging the user out of the system.
 *      tags:
 *        - User Logout
 *      responses:
 *        '200':
 *          description: User logged out successfully.
 */

/**
 * @swagger
 *  /auth/logout-from-all-devices:
 *    post:
 *      summary: Logout from all devices
 *      description: Logging the user out from all devices.
 *      tags:
 *        - User Logout
 *      responses:
 *        '200':
 *          description: User logged out from all devices successfully.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                    example: success
 *                  data:
 *                    type: object
 *                    properties:
 *                      user:
 *                        $ref: '#/components/schemas/user'
 *                      accessToken:
 *                        type: string
 *                    required:
 *                      - user
 *                  message:
 *                    type: string
 *        '400':
 *          description: Bad request.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  message:
 *                    type: string
 *        '401':
 *          description: The user is not authorized
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  message:
 *                    type: string
 *        '404':
 *          description: Not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  message:
 *                    type: string
 *        '500':
 *          description: Internal Error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  error:
 *                    type: string
 */

/**
 * @swagger
 *  /auth/google:
 *    get:
 *      summary: Sign in with Google
 *      description: Register or log in with the user's Google account.
 *      tags:
 *        - User Login
 *      responses:
 *        '200':
 *          description: User authenticated with Google.
 */

/**
 * @swagger
 *  /auth/github:
 *    get:
 *      summary: Sign in with GitHub
 *      description: Register or log in with the user's GitHub account.
 *      tags:
 *        - User Login
 *      responses:
 *        '200':
 *          description: User authenticated with GitHub.
 */

/**
 * @swagger
 *  /auth/facebook:
 *    get:
 *      summary: Sign in with Facebook
 *      description: Register or log in with the user's Facebook account.
 *      tags:
 *        - User Login
 *      responses:
 *        '200':
 *          description: User authenticated with Facebook.
 */

/**
 * @swagger
 *  /auth/forget-password:
 *    post:
 *      summary: Forget password
 *      description: >-
 *        Forget the password. Request to set a new password through sending a
 *        reset token the email.
 *      tags:
 *        - Forget-reset password
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  format: email
 *      responses:
 *        '200':
 *          description: Password reset link sent successfully.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  data:
 *                    type: object
 *                  message:
 *                    type: string
 *                example:
 *                  status: success
 *                  data: {}
 *                  message: Sent Email successfully. (Valid for 20 minutes)
 *        '400':
 *          description: Bad request.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  message:
 *                    type: string
 *        '404':
 *          description: Not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  message:
 *                    type: string
 *        '500':
 *          description: Internal Error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  error:
 *                    type: string
 */

/**
 * @swagger
 *  /auth/reset-password/resend:
 *    post:
 *      summary: Resend reset token
 *      description: Resend a new reset token for resetting the user's password.
 *      tags:
 *        - Forget-reset password
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  format: email
 *      responses:
 *        '200':
 *          description: Reset token resent successfully.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  data:
 *                    type: object
 *                  message:
 *                    type: string
 *                example:
 *                  status: success
 *                  data: {}
 *                  message: Resend Email successfully. (Valid for 20 minutes)
 *        '400':
 *          description: Bad request.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  message:
 *                    type: string
 *        '404':
 *          description: Not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  message:
 *                    type: string
 *        '500':
 *          description: Internal Error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  error:
 *                    type: string
 */

/**
 * @swagger
 *  /auth/reset-password/{token}:
 *    patch:
 *      summary: Reset password
 *      description: Reset the user's password with the reset token sent to their email.
 *      tags:
 *        - Forget-reset password
 *      parameters:
 *        - name: token
 *          in: path
 *          required: true
 *          description: The reset token sent in the email
 *          schema:
 *            type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                password:
 *                  type: string
 *                  description: The new password
 *                passwordConfirm:
 *                  type: string
 *                  description: Rewrite the new Password
 *      responses:
 *        '200':
 *          description: Password reset successfully.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  data:
 *                    type: object
 *                    properties:
 *                      user:
 *                        $ref: '#/components/schemas/user'
 *                  message:
 *                    type: string
 *        '400':
 *          description: Bad request.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  message:
 *                    type: string
 *        '404':
 *          description: Not found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  message:
 *                    type: string
 *        '500':
 *          description: Internal Error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                  error:
 *                    type: string
 */

/**
 * @swagger
 *components:
 *  schemas:
 *    user:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The id of user
 *        username:
 *          type: string
 *          description: The username used in the app
 *        email:
 *          type: string
 *          format: email
 *        phone:
 *          type: string
 *        picture:
 *          type: string
 *          format: url
 *        status:
 *          type: string
 *        accessToken:
 *          type: string
 *        refreshToken:
 *          type: string
 */
